import React, { useEffect } from 'react';
import { MdEdit } from 'react-icons/md';
import styles from './HomeTab.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTransactions,
  deleteTransaction,
} from '../../redux/transactions/operations';
import { selectAllTransactions } from '../../redux/transactions/selectors';
import { useMedia } from 'react-use';
// import { nanoid } from 'nanoid';

function convertStringToDate(str = '2022-12-01T00:00:00.000Z') {
  return str.split('T')[0].split('-').reverse().join('.');
}

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum'];

function HomeTab() {
  const isMobile = useMedia('(max-width: 768px)');
  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const handleDelete = transactionId => {
    dispatch(deleteTransaction(transactionId));
  };

  const renderDesktop = () => {
    return (
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadRow}>
            {tableHeadData.map(head => (
              <th className={styles.tableHeadData} key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {Array.isArray(transactions) && transactions.map(item => {
            const result = item.Expenses ? '-' : '+';
            return (
              <tr key={item.id} className={styles.tableBodyRow}>
                <td className={styles.tableBodyData}>
                  {convertStringToDate(item.date)}
                </td>
                <td className={styles.tableBodyData}>{result}</td>
                <td className={styles.tableBodyData}>{item.category}</td>
                <td className={styles.tableBodyData}>{item.comment}</td>
                <td
                  className={
                    result === '+'
                      ? styles.tableBodyDataPlus
                      : styles.tableBodyDataMinus
                  }
                >
                  {item.sum}
                </td>
                <td>
                  <button
                    className={styles.buttonEdit}
                    onClick={() => console.log('Edit', item.id)}
                  >
                    <MdEdit size={24} />
                  </button>
                </td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const renderMobile = () => {
    return (
      <>
        {transactions.map(item => {
          const borderColor = item.Expenses ? '#ff6596' : '#24cca7';
          const result = item.Expenses ? '-' : '+';
          return (
            <ul
              key={item.id}
              className={
                result === '+' ? styles.mobileListPlus : styles.mobileList
              }
              style={{ borderColor: borderColor }}
            >
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Data</span>
                <span className={styles.mobileListData}>
                  {convertStringToDate(item.date)}
                </span>
              </li>
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Typ</span>
                <span className={styles.mobileListData}>{result}</span>
              </li>
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Kategoria</span>
                <span className={styles.mobileListData}>{item.category}</span>
              </li>
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Komentarz</span>
                <span className={styles.mobileListData}>{item.comment}</span>
              </li>
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Kwota</span>
                <span
                  className={
                    result === '+'
                      ? styles.mobileListDataPlus
                      : styles.mobileListDataMinus
                  }
                >
                  {item.sum}
                </span>
              </li>
              <li className={styles.mobileListItem}>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className={styles.editButton}
                  onClick={() => console.log('Edit', item.id)}
                >
                  <MdEdit size={18} />
                  Edit
                </button>
              </li>
            </ul>
          );
        })}
      </>
    );
  };

  return <div>{isMobile ? renderMobile() : renderDesktop()}</div>;
}

export default HomeTab;
