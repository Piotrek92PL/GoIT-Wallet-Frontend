import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './BackgroundContainer.module.css';
import PropTypes from 'prop-types';

export const BackgroundContainer = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;
  let backgroundStyle = css.background;

  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
    backgroundStyle += ` ${css.backgroundDesktop}`;
  } else if (isTablet) {
    containerStyle += ` ${css.tablet}`;
    backgroundStyle += ` ${css.backgroundTablet}`;
  } else if (isMobile) {
    containerStyle += ` ${css.mobile}`;
  }

  return (
    <div className={backgroundStyle}>
      <div className={containerStyle}>{children}</div>
    </div>
  );
};

BackgroundContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
