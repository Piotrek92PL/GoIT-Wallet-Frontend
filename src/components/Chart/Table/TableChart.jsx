import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import css from './TableChart.module.css';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/categories/selectors';
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
  const transactions = useSelector(selectAllTransactions).data;
  const balance = useSelector(selectBalance);
  const dataIncome = useSelector(selectIncome);
  const dataExpenses = useSelector(selectExpense);
  const displayBalance = !isNaN(parseFloat(balance))
    ? parseFloat(balance).toFixed(2)
    : '0.00';
  const formattedExpenses = !isNaN(parseFloat(dataExpenses))
    ? parseFloat(balance).toFixed(2)
    : '0.00';
  const formattedIncome = !isNaN(parseFloat(dataIncome))
    ? parseFloat(balance).toFixed(2)
    : '0.00';

  const incomeNr = categoriesArr.find(cat => cat.name === 'Income').id;
  const makeChartArr = data => {
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
    // for (let index = dataArr.length - 1; index > 0; index--) {
    //   if (dataArr[index] == null) {
    //     console.log(`dataArr before slice [${index}]`, dataArr);
    //     dataArr.slice(0, index).join(dataArr.slice(index, dataArr.length));
    //     console.log(`dataArr after slice [${index}]`, dataArr);
    //   }
    // }
    return dataArr;
  };
  const chartArr = makeChartArr(transactions);

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

          {dataStatsArr.map(({ category, color, total }) => (
            <ul className={css.list} key={nanoid()}>
              <li className={css.listItem}>
                <div className={css.listItemWrap}>
                  <div
                    className={css.colorBox}
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                  <p className={css.category}>{category}</p>
                </div>
                <p>{displayBalance}</p>
              </li>
            </ul>
          ))}

          <div className={css.resultsWrap}>
            <div className={css.results}>
              <p className={css.resultsTitle}>Expenses:</p>
              <p className={css.resultsExpenses}>{formattedExpenses}</p>
            </div>
            <div className={css.results}>
              <p className={css.resultsTitle}>Income:</p>
              <p className={css.resultsIncome}>{formattedIncome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TableChart.propTypes = {
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

export default TableChart;
