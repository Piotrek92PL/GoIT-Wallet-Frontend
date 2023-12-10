// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import css from './TableChart.module.css';
// import { getTransactions } from '../../../redux/finance/financeOperations';
// import { nanoid } from 'nanoid';

// const monthToNumber = {
// 	January: '01',
// 	February: '02',
// 	March: '03',
// 	April: '04',
// 	May: '05',
// 	June: '06',
// 	July: '07',
// 	August: '08',
// 	September: '09',
// 	October: '10',
// 	November: '11',
// 	December: '12',
// };

// const TableChart = ({ dataToRender }) => {
// 	const dataStats = dataToRender.stats;
// 	const dataExpenses = dataToRender.expenses;

// 	const formattedExpenses = dataExpenses
// 		.toLocaleString(undefined, {
// 			useGrouping: true,
// 			minimumFractionDigits: 2,
// 			maximumFractionDigits: 2,
// 		})
// 		.replace(',', '.');

// 	const dataIncome = dataToRender.income;

// 	const formattedIncome = dataIncome
// 		.toLocaleString(undefined, {
// 			useGrouping: true,
// 			minimumFractionDigits: 2,
// 			maximumFractionDigits: 2,
// 		})
// 		.replace(',', '.');

// 	const [selectedMonth, setSelectedMonth] = useState('10');
// 	const [selectedYear, setSelectedYear] = useState('2023');
// 	const dispatch = useDispatch();

// 	const handleMonthChange = event => {
// 		const selectedMonthNumber = event.target.value;
// 		setSelectedMonth(selectedMonthNumber);
// 	};

// 	const handleYearChange = event => {
// 		setSelectedYear(event.target.value);
// 	};

// 	const dataStatsArr = [];

// 	for (const obj in dataStats) {
// 		dataStatsArr.push(dataStats[obj]);
// 	}

// 	useEffect(() => {
// 		const data = { selectedMonth: selectedMonth, selectedYear };

// 		dispatch(getTransactions(data));
// 	}, [dispatch, selectedMonth, selectedYear]);

// 	return (
// 		<div className={css.chartWrap}>
// 			<div className={css.tableWra}>
// 				<div className={css.dateBox}>
// 					<div className={css.month}>
// 						<select
// 							className={css.selectMonth}
// 							value={selectedMonth}
// 							onChange={handleMonthChange}>
// 							{Object.keys(monthToNumber).map(month => (
// 								<option key={month} value={monthToNumber[month]}>
// 									{month}
// 								</option>
// 							))}
// 						</select>
// 					</div>
// 					<select
// 						className={css.selectYear}
// 						value={selectedYear}
// 						onChange={handleYearChange}>
// 						{['2020', '2021', '2022', '2023', '2024', '2025', '2026'].map(
// 							year => (
// 								<option key={year} value={year}>
// 									{year}
// 								</option>
// 							)
// 						)}
// 					</select>
// 				</div>
// 				<div className={css.statisticsList}>
// 					<div className={css.header}>
// 						<div className={css.headerItem}>Category</div>
// 						<div className={css.headerItem}>Sum</div>
// 					</div>

// 					{dataStatsArr.map(({ category, color, total }) => (
// 						<ul className={css.list} key={nanoid()}>
// 							<li className={css.listItem}>
// 								<div className={css.listItemWrap}>
// 									<div
// 										className={css.colorBox}
// 										style={{
// 											backgroundColor: color,
// 										}}></div>
// 									<p className={css.category}>{category}</p>
// 								</div>
// 								<p>
// 									{total
// 										.toLocaleString('en-US', { minimumFractionDigits: 2 })
// 										.replace(',', ' ')}
// 								</p>
// 							</li>
// 						</ul>
// 					))}

// 					<div className={css.resultsWrap}>
// 						<div className={css.results}>
// 							<p className={css.resultsTitle}>Expenses:</p>
// 							<p className={css.resultsExpenses}>{formattedExpenses}</p>
// 						</div>
// 						<div className={css.results}>
// 							<p className={css.resultsTitle}>Income:</p>
// 							<p className={css.resultsIncome}>{formattedIncome}</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// TableChart.propTypes = {
// 	dataToRender: PropTypes.shape({
// 		stats: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				category: PropTypes.string.isRequired,
// 				total: PropTypes.number.isRequired,
// 				color: PropTypes.string.isRequired,
// 			})
// 		).isRequired,
// 		expenses: PropTypes.number.isRequired,
// 		income: PropTypes.number.isRequired,
// 	}).isRequired,
// };

// export default TableChart;
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './TableChart.module.css';
import { getTransactions } from '../../../redux/finance/financeOperations';
import { nanoid } from 'nanoid';

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

const TableChart = ({ dataToRender }) => {
  const dataStats = dataToRender.stats;
  const dataExpenses = dataToRender.expenses;

  const formattedExpenses = dataExpenses
    .toLocaleString(undefined, {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(',', '.');

  const dataIncome = dataToRender.income;

  const formattedIncome = dataIncome
    .toLocaleString(undefined, {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(',', '.');

  const [selectedMonth, setSelectedMonth] = useState('10');
  const [selectedYear, setSelectedYear] = useState('2023');
  const dispatch = useDispatch();

  const handleMonthChange = event => {
    const selectedMonthNumber = event.target.value;
    setSelectedMonth(selectedMonthNumber);
  };

  const handleYearChange = event => {
    setSelectedYear(event.target.value);
  };

  const dataStatsArr = [];

  for (const obj in dataStats) {
    dataStatsArr.push(dataStats[obj]);
  }

  useEffect(() => {
    const data = { selectedMonth: selectedMonth, selectedYear };

    dispatch(getTransactions(data));
  }, [dispatch, selectedMonth, selectedYear]);

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
                <p>
                  {total
                    .toLocaleString('en-US', { minimumFractionDigits: 2 })
                    .replace(',', ' ')}
                </p>
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
