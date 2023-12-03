import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './BackgroundLogSign.module.css';
import PropTypes from 'prop-types';

export const BackgroundLogSign = ({ children }) => {
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
    backgroundStyle += ` ${css.backgroundMobile}`;
  }

  return (
    <div className={backgroundStyle}>
      <div className={containerStyle}>{children}</div>
    </div>
  );
};

BackgroundLogSign.propTypes = {
  children: PropTypes.node.isRequired,
};
