import React, { useEffect } from 'react';
import css from './TransactionsList.module.css';
import PropTypes from 'prop-types';
import { TransactionsEntry } from './TransactionEntry/TransactionsEntry';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/global/selectors';
import {
  getCategory,
  getCategoryColor,
  getCategoryName,
  selectCategories,
} from 'redux/categories/selectors';

export const TransactionsList = ({ data = [] }) => {
  const dispatch = useDispatch();
  const transactions = []; //!
  // const transactions = useSelector(selectT..);//!
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    // dispatch(fetchCurrency());
  }, [dispatch, transactions]);

  const jsonString = JSON.stringify(categories, null, 2);
  const myCategory = JSON.stringify(getCategory(3, categories), null, 2);
  const myCatName = JSON.stringify(getCategoryName(2, categories), null, 2);
  const myCatColor = JSON.stringify(getCategoryColor(2, categories), null, 2);

  return (
    <>
      <div className={css.list}>
        {isLoading ? (
          <div className={css.spinner}>
            <CircularProgress className={css.Currency__spinner} />
          </div>
        ) : (
          <pre>
            {myCatName} {myCatColor}
            {'\n------------------------\n'}
            {myCategory}
            {'\n------------------------\n'}
            {jsonString}
          </pre>
          // data.forEach(transaction => {
          //   return <TransactionsEntry transaction />;
          // })
        )}
      </div>
    </>
  );
};

// proptypes need fixing:
TransactionsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes
      .shape
      // _id object
      // type enum .isRequired
      // category nr .isRequired
      // amount .isRequired
      // date .isRequired
      // comment string
      // owner object .isRequired
      ()
  ).isRequired,
};
