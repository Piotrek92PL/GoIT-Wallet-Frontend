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

axios.defaults.baseURL = BACKEND_BASE_URL;

ChartJS.register(ArcElement, Tooltip, Colors, Legend);

const Chart = ({ dataToRender }) => {
  const dataStats = dataToRender.stats;
  //do zmiany po skonczonym logowaniu
  //Get: http://localhost:3000/api/transactions
  const dataStatsArr = [
    {
      _id: '6571f6d95da7401f5932fac0',
      type: 'expense',
      category: 9,
      amount: 1000,
      date: '2023-12-07T16:46:17.967Z',
      comment: null,
      owner: '6571f5325da7401f5932fa9e',
      __v: 0,
    },
    {
      _id: '6571f6e55da7401f5932fac4',
      type: 'expense',
      category: 9,
      amount: 2000,
      date: '2023-12-07T16:46:29.887Z',
      comment: null,
      owner: '6571f5325da7401f5932fa9e',
      __v: 0,
    },
    {
      _id: '6571f6f05da7401f5932fac8',
      type: 'income',
      category: 9,
      amount: 20000,
      date: '2023-12-07T16:46:40.665Z',
      comment: null,
      owner: '6571f5325da7401f5932fa9e',
      __v: 0,
    },
  ];

  for (const obj in dataStats) {
    dataStatsArr.push(dataStats[obj]);
  }
  //kolory
  const allColors = {
    expense: '#ff0000',
    income: '#0000ff',
  };

  //const categories = dataStatsArr.map(item => item.category);
  const categories = dataStatsArr.map(item => item.type);
  const values = dataStatsArr.map(item => item.amount);
  const colors = dataStatsArr.map(item => allColors[item.type]);
  //const colors = dataStatsArr.map(item => item.color);

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

  const [balance, setBalance] = useState(null);
  // const token = useSelector(selectUserToken);
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetch() {
      const response = await axios.get('/api/transactions');
      //   const response = await axios.get(
      //     ' http://localhost:443/api/transactions'
      //     // {
      //     //   headers: {
      //     //     Authorization: `Bearer ${token}`,
      //     //   },
      //     // }
      //   );
      setBalance(response.data.data.balance);
    }
    if (token) {
      fetch();
    }
  }, [balance, token]);

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
