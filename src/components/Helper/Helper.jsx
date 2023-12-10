import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Helper.module.css';
import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
import { toggleModalEditTransaction } from 'redux/global/slice';
import { selectIsModalEditTransaction } from 'redux/global/selectors';
import { getTransactionById } from 'redux/transactions/operations';
import { selectCurrentTransaction } from 'redux/transactions/selectors';

export const Helper = () => {
  const dispatch = useDispatch();
  const isModalEditTransaction = useSelector(selectIsModalEditTransaction);
  const transactionFromSelector = useSelector(selectCurrentTransaction);
  if (!transactionFromSelector) {
    console.log('transactionFromSelector is null');
  }
  if (transactionFromSelector) {
    console.log('tarnsaction', transactionFromSelector);
  }

  const transactionToEdit = transactionFromSelector || {
    type: '',
    category: '',
    amount: '',
    date: new Date(),
    comment: '',
  };

  const handleToggleModal = () => {
    if (!isModalEditTransaction) {
      dispatch(getTransactionById('6574e99ca7aa62640ac430f4'));
    }
    dispatch(toggleModalEditTransaction());
  };

  return (
    <div>
      <button className={css.button} onClick={handleToggleModal}></button>
      <ModalEditTransaction
        transactionToEdit={transactionToEdit}
        isOpen={isModalEditTransaction}
        onClose={handleToggleModal}
      />
    </div>
  );
};
