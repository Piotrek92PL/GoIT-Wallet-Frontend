import React from 'react';
import css from './ButtonCancelLogout.module.css';
import PropTypes from 'prop-types';

export const ButtonCancelLogout = ({ onClick }) => {
  return (
    <>
      <button className={css.buttonCancel} type="button" onClick={onClick}>
        CANCEL
      </button>
    </>
  );
};

ButtonCancelLogout.propTypes = {
  onClick: PropTypes.func.isRequired,
};
