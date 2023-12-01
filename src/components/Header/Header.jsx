import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './Header.module.css';
import { WalletWithIcon } from 'components/WalletWithIcon/WalletWithIcon';
// import {
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from '../../redux/auth/selectors';
// import { useSelector } from 'react-redux';

export const Header = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;

  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
  } else if (isTablet) {
    containerStyle += ` ${css.tablet}`;
  } else if (isMobile) {
    containerStyle += ` ${css.mobile}`;
  }
  return (
    <div className={css.header}>
      {/* //   return isLoggedIn && isRefreshing ? ( */}
      <div className={containerStyle}>
        <WalletWithIcon />
      </div>

      {/* //   ) : null; */}
    </div>
  );
};
