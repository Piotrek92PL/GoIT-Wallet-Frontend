import React from 'react';
import css from './TransactionsEntry.module.css';
import PropTypes from 'prop-types';
import { getCategoryName } from 'redux/transactions/operations';

export const TransactionsEntry = ({
  date,
  type,
  category,
  comment,
  amount,
}) => {
  return (
    <>
      <div className={css.entry}>
        {date}|{type}|{category}|{comment}|SUM:{amount}
      </div>
    </>
  );
};

// proptypes need fixing:
TransactionsEntry.propTypes = {
  // _id object
  // type enum .isRequired
  // category nr .isRequired
  // amount .isRequired
  // date .isRequired
  // comment string
  // owner object .isRequired
};
