import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './BackgroundLogSign.module.css';

export const BackgroundLogSign = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;
  if (isDesktop) containerStyle += ` ${css.desktop}`;
  else if (isTablet) containerStyle += ` ${css.tablet}`;

  return <div className={containerStyle}>{children}</div>;
};
