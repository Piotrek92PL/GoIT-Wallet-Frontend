import PropTypes from 'prop-types';
import css from './Chart.module.css';
import { useEffect, useState } from 'react';
// import { selectUserToken } from '../../redux/user/userSelectors';
// import { useSelector } from 'react-redux';
import axios from 'axios';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Colors,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BACKEND_BASE_URL } from 'redux/global/constants';
import localStorage from 'redux-persist/es/storage';
import { getCategoryColor, selectCategories } from 'redux/categories/selectors';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = BACKEND_BASE_URL;

ChartJS.register(ArcElement, Tooltip, Colors, Legend);

const Chart = () => {
  const categoriesArr = useSelector(selectCategories);
  const [balance, setBalance] = useState(null);
  const [transactionsArr, setTransactionsArr] = useState([]);
  const [fetched, setFetched] = useState(false); //prevents neverending fetching

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

  const categories = transactionsArr.map(item => allNames[item.category]);
  const values = transactionsArr.map(item => item.amount);
  const colors = transactionsArr.map(item => allColors[item.category]);

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function fetch() {
      const response = await axios.get('/api/transactions');
      if (balance !== 1997) {
        console.log('setting balance');
        setBalance(1997);
        // setBalance(response.data.balance); //jeszcze nie ma balance na backendzie
      }
      if (transactionsArr !== response.data.data) {
        console.log('setting transactions');
        setTransactionsArr(response.data.data);
      }
      // console.log('/api/transactions', response);
    }
    if (token && !fetched) {
      setFetched(true);
      fetch();
    }
  }, [balance, transactionsArr, fetched]);

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
      {balance !== null && (
        <p className={css.balance}>
          ${' '}
          {balance
            .toLocaleString('en-US', { minimumFractionDigits: 2 })
            .replace(',', ' ')}
        </p>
      )}
    </div>
  );
};

Chart.propTypes = {
  dataToRender: PropTypes.shape({
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    expenses: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
  }).isRequired,
};

export default Chart;
