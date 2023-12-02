import React from 'react';
import css from './ButtonConfirmLogout.module.css';
import PropTypes from 'prop-types';

export const ButtonConfirmLogout = ({ onClick }) => {
  return (
    <>
      <button className={css.buttonConfirm} type="button" onClick={onClick}>
        CONFIRM
      </button>
    </>
  );
};

ButtonConfirmLogout.propTypes = {
  onClick: PropTypes.func.isRequired,
};
