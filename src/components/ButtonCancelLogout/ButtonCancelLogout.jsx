import React from 'react';
import css from './ButtonCancelLogout.module.css';

export const ButtonCancelLogout = ({ onClick }) => {
  return (
    <>
      <button className={css.buttonCancel} type="button" onClick={onClick}>
        CANCEL
      </button>
    </>
  );
};
