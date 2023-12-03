import React from 'react';
import css from './ButtonAuth.module.css';
import PropTypes from 'prop-types';

export const ButtonAuth = ({ content, disabled }) => {
  return (
    <>
      <button className={css.buttonAuth} type="submit" disabled={disabled}>
        {content}
      </button>
    </>
  );
};

ButtonAuth.propTypes = {
  content: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
