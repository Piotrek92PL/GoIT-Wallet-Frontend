import React, { useEffect } from 'react';
import css from './TransactionsList.module.css';
import PropTypes from 'prop-types';
import { TransactionsEntry } from './TransactionEntry/TransactionsEntry';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/global/selectors';

export const TransactionsList = ({ data = [] }) => {
  const dispatch = useDispatch();
  const categories = [
    { id: 1, name: 'name 1' },
    { id: 2, name: 'name 2' },
    { id: 3, name: 'name 3' },
    { id: 4, name: 'Other 4' },
  ];
  const transactions = []; //!
  // const transactions = useSelector(selectCategories);//!
  // const categories = useSelector(selectCategories);//!
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    // dispatch(fetchCurrency());
  }, [dispatch, transactions]);
  return (
    <>
      <div className={css.list}>
        {isLoading ? (
          <div className={css.spinner}>
            <CircularProgress className={css.Currency__spinner} />
          </div>
        ) : (
          data.forEach(transaction => {
            return <TransactionsEntry transaction />;
          })
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
