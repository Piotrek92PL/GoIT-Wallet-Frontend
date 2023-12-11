import React, { useState } from 'react';
import { useEffect } from 'react';
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
import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
import { toggleModalEditTransaction } from 'redux/global/slice';
import { selectIsModalEditTransaction } from 'redux/global/selectors';
import { getTransactionById } from 'redux/transactions/operations';
import { selectCurrentTransaction } from 'redux/transactions/selectors';
import Pagination from '../Pagination/Pagination';

function convertStringToDate(str = '2022-12-01T00:00:00.000Z') {
  return str.split('T')[0].split('-').reverse().join('.');
}

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum'];

function HomeTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(8);
  const isMobile = useMedia('(max-width: 768px)');
  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  useEffect(() => {
    console.log(transactions); // Logging transactions
  }, [transactions]);

  const handleDelete = transactionId => {
    dispatch(deleteTransaction(transactionId)).then(() => {
      dispatch(getAllTransactions());
    });
  };

  const isModalEditTransaction = useSelector(selectIsModalEditTransaction);
  const transactionFromSelector = useSelector(selectCurrentTransaction);
  if (!transactionFromSelector) {
  }
  if (transactionFromSelector) {
  }

  const transactionToEdit = transactionFromSelector || {
    type: '',
    category: '',
    amount: '',
    date: new Date(),
    comment: '',
  };

  const handleToggleModal = transactionId => {
    dispatch(toggleModalEditTransaction());
    if (!isModalEditTransaction && transactionId) {
      dispatch(getTransactionById(transactionId));
    } else {
      dispatch(getAllTransactions());
    }
  };

  // Pagination logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = Array.isArray(transactions)
    ? transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
    : [];

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
          {currentTransactions.map(item => {
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
                {/* Corrected placement of <td> for Edit and Delete buttons */}
                <td>
                  <button
                    className={styles.buttonEdit}
                    onClick={() => handleToggleModal(item._id)}
                  >
                    <MdEdit size={24} />
                  </button>
                </td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <Pagination
          transactionsPerPage={transactionsPerPage}
          totalTransactions={transactions.length}
          paginate={paginate}
        />
      </table>
    );
  };


  const renderMobile = () => {
    return (
      <>
        {currentTransactions.map(item => {
          const borderColor = item.Expenses ? '#ff6596' : '#24cca7';
          const result = item.Expenses ? '-' : '+';
          return (
            <ul
              key={item._id}
              className={
                result === '+' ? styles.mobileListPlus : styles.mobileList
              }
              style={{ borderColor: borderColor }}
            >
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Date</span>
                <span className={styles.mobileListData}>
                  {convertStringToDate(item.date)}
                </span>
              </li>
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Type</span>
                <span className={styles.mobileListData}>{result}</span>
              </li>
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Category</span>
                <span className={styles.mobileListData}>{item.category}</span>
              </li>
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Comment</span>
                <span className={styles.mobileListData}>{item.comment}</span>
              </li>
              <li className={styles.mobileListItem}>
                <span className={styles.mobileListCategory}>Sum</span>
                <span
                  className={
                    result === '+'
                      ? styles.mobileListDataPlus
                      : styles.mobileListDataMinus
                  }
                >
                  {item.amount}
                </span>
              </li>
              <li className={styles.mobileListItem}>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
                <button
                  className={styles.editButton}
                  onClick={() => handleToggleModal(item._id)}
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

  return (
    <div>
      {isMobile ? renderMobile() : renderDesktop()}

      <ModalEditTransaction
        transactionToEdit={transactionToEdit}
        isOpen={isModalEditTransaction}
        onClose={() => handleToggleModal(null)}
      />
    </div>
  );
}

export default HomeTab;
