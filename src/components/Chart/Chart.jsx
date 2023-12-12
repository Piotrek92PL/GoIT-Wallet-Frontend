import css from './Chart.module.css';
// import { selectUserToken } from '../../redux/user/userSelectors';
// import { useSelector } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Colors,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BACKEND_BASE_URL } from 'redux/global/constants';
import { selectCategories } from 'redux/categories/selectors';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/selectors';

axios.defaults.baseURL = BACKEND_BASE_URL;

ChartJS.register(ArcElement, Tooltip, Colors, Legend);

const Chart = ({ transactions }) => {
  const categoriesArr = useSelector(selectCategories);
  const balance = useSelector(selectBalance);
  const displayBalance = !isNaN(parseFloat(balance))
    ? parseFloat(balance).toFixed(2)
    : '0.00';
  const incomeNr = categoriesArr.find(cat => cat.name === 'Income').id;
  const makeChartArr = data => {
    // console.log(`Chart makeChartArr data:`, data);
    let dataArr = [];
    data.forEach(tr => {
      if (tr.type === 'income') {
        if (dataArr[incomeNr] && dataArr[incomeNr].amount) {
          dataArr[incomeNr].amount += tr.amount;
        } else {
          dataArr[incomeNr] = { ...tr, category: incomeNr };
        }
      } else {
        dataArr[tr.category] = {
          ...tr,
          amount:
            (dataArr[tr.category] && dataArr[tr.category].amount
              ? dataArr[tr.category].amount
              : 0) + tr.amount,
        };
      }
    });
    //slicing off empty array cells
    for (let index = dataArr.length - 1; index > 0; index--) {
      if (dataArr[index] == null) {
        // console.log(`dataArr before slice [${index}]`, dataArr);
        dataArr = dataArr
          .slice(0, index)
          .concat(dataArr.slice(index + 1, dataArr.length));
        // console.log(`dataArr after slice [${index}]`, dataArr);
      }
    }
    return dataArr;
  };
  // const chartArr = makeChartArr(transactions);
  const chartArr =
    Array.isArray(transactions) && transactions.length > 0
      ? makeChartArr(transactions)
      : [];

  //category colors
  const makePalette = () => {
    const paletteArray = categoriesArr.map(cat => {
      return { [cat.id]: cat.color };
    });
    const palette = Object.assign({}, ...paletteArray);
    return palette;
  };
  const allColors = makePalette();
  // category names
  const makeNames = () => {
    const namesArray = categoriesArr.map(cat => {
      return { [cat.id]: cat.name };
    });
    const names = Object.assign({}, ...namesArray);
    return names;
  };
  const allNames = makeNames();

  // !(Array.isArray(chartArr))? [] :
  const categories = chartArr.map(item => allNames[item.category]);
  const values = chartArr.map(item => item.amount);
  const colors = chartArr.map(item => allColors[item.category]);

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Sum',
        data: values,
        backgroundColor: colors,
        borderWidth: 1,
        borderColor: ['transparent'],
      },
    ],
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;

      ctx.font = 'bold 18px arial';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      //ctx.fillText("jakis text");
      ctx.save();
    },
  };

  const options = {
    cutout: '65%',
    plugins: {
      colors: {
        forceOverride: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={css.doughnut}>
      <Doughnut data={data} options={options} plugins={[textCenter]}></Doughnut>
      {balance !== null && <p className={css.balance}>$ {displayBalance}</p>}
    </div>
  );
};

Chart.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
