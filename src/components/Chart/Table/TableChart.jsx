import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import css from './TableChart.module.css';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getCategoryName, selectCategories } from 'redux/categories/selectors';
import {
  selectAllTransactions,
  selectBalance,
  selectExpense,
  selectIncome,
} from 'redux/transactions/selectors';

const monthToNumber = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

const TableChart = () => {
  const categoriesArr = useSelector(selectCategories);
  const transactions = useSelector(selectAllTransactions);
  const balance = useSelector(selectBalance);
  const dataIncome = useSelector(selectIncome);
  const dataExpenses = useSelector(selectExpense);
  const moneyFormat = number =>
    !isNaN(parseFloat(number)) ? parseFloat(number).toFixed(2) : '0.00';
  const displayBalance = moneyFormat(balance);

  const incomeNr = categoriesArr.find(cat => cat.name === 'Income').id;
  const makeChartArr = data => {
    // console.log(`TableChart makeChartArr data:`, data);
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
    return dataArr;
  };

  const chartArr =
    Array.isArray(transactions) && transactions.length > 0
      ? makeChartArr(transactions)
      : [];

  const [selectedMonth, setSelectedMonth] = useState('10');
  const [selectedYear, setSelectedYear] = useState('2023');
  // const dispatch = useDispatch();

  const handleMonthChange = event => {
    const selectedMonthNumber = event.target.value;
    setSelectedMonth(selectedMonthNumber);
  };

  const handleYearChange = event => {
    setSelectedYear(event.target.value);
  };

  const dataStatsArr = [];

  for (const obj in chartArr) {
    dataStatsArr.push(chartArr[obj]);
  }

  // useEffect(() => {
  // 	const data = { selectedMonth: selectedMonth, selectedYear };

  // 	dispatch(getTransactions(data));
  // }, [dispatch, selectedMonth, selectedYear]);

  return (
    <div className={css.chartWrap}>
      <div className={css.tableWra}>
        <div className={css.dateBox}>
          <div className={css.month}>
            <select
              className={css.selectMonth}
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              {Object.keys(monthToNumber).map(month => (
                <option key={month} value={monthToNumber[month]}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <select
            className={css.selectYear}
            value={selectedYear}
            onChange={handleYearChange}
          >
            {['2020', '2021', '2022', '2023', '2024', '2025', '2026'].map(
              year => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
        </div>
        <div className={css.statisticsList}>
          <div className={css.header}>
            <div className={css.headerItem}>Category</div>
            <div className={css.headerItem}>Sum</div>
          </div>

          {dataStatsArr.map(({ category, color, amount }) => (
            <ul className={css.list} key={nanoid()}>
              <li className={css.listItem}>
                <div className={css.listItemWrap}>
                  <div
                    className={css.colorBox}
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                  <p className={css.category}>
                    {getCategoryName(category, categoriesArr)}
                  </p>
                </div>
                <p>{moneyFormat(amount)}</p>
              </li>
            </ul>
          ))}

          <div className={css.resultsWrap}>
            <div className={css.results}>
              <p className={css.resultsTitle}>Expenses:</p>
              <p className={css.resultsExpenses}>{moneyFormat(dataExpenses)}</p>
            </div>
            <div className={css.results}>
              <p className={css.resultsTitle}>Income:</p>
              <p className={css.resultsIncome}>{moneyFormat(dataIncome)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// TableChart.propTypes = {
//   dataToRender: PropTypes.shape({
//     stats: PropTypes.arrayOf(
//       PropTypes.shape({
//         category: PropTypes.string.isRequired,
//         total: PropTypes.number.isRequired,
//         color: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     expenses: PropTypes.number.isRequired,
//     income: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default TableChart;
