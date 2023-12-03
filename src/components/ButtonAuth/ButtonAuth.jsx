import React from 'react';
import css from './ButtonAuth.module.css';
import PropTypes from 'prop-types';

export const ButtonAuth = ({ onClick, content }) => {
  return (
    <>
      <button className={css.buttonAuth} type="submit" onClick={onClick}>
        {content}
      </button>
    </>
  );
};

ButtonAuth.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};
