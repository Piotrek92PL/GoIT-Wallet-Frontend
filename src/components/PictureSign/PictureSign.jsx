import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './PictureSign.module.css';

export const PictureSign = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;
  let pictureStyle = css.picture;

  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
    pictureStyle += ` ${css.pictureDesktop}`;
  } else if (isTablet) {
    containerStyle += ` ${css.tablet}`;
    pictureStyle += ` ${css.pictureTablet}`;
  } else if (isMobile) {
    containerStyle = ` ${css.mobile}`;
  }

  return (
    <div className={containerStyle}>
      <div className={pictureStyle}></div>
      <p className={css.title}>Finance App</p>
    </div>
  );
};
