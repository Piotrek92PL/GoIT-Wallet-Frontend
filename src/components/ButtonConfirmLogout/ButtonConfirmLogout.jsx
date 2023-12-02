import React from 'react';
import css from './ButtonConfirmLogout.module.css';

export const ButtonConfirmLogout = ({ onClick }) => {
  return (
    <>
      <button className={css.buttonConfirm} type="button" onClick={onClick}>
        CONFIRM
      </button>
    </>
  );
};
