import React from 'react';
import css from './LinkAuth.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const LinkAuth = ({ to, content }) => {
  return (
    <>
      <Link className={css.linkAuth} to={to}>
        {content}
      </Link>
    </>
  );
};

LinkAuth.propTypes = {
  content: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
