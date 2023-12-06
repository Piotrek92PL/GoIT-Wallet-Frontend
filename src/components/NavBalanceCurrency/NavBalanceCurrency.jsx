import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './NavBalanceCurrency.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';

export const NavBalanceCurrency = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;
  let navBalanceStyle = css.navBalance;
  let currencyStyle;

  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
    navBalanceStyle += ` ${css.navBalanceTabletDesktop}`;
  } else if (isTablet) {
    navBalanceStyle += ` ${css.navBalanceTabletDesktop}`;
    currencyStyle = ` ${css.currencyTablet}`;
  } else if (isMobile) {
    containerStyle += ` ${css.mobile}`;
    currencyStyle = ` ${css.currencyMobile}`;
    navBalanceStyle += ` ${css.navBalanceMobile}`;
  }
  return (
    <div className={containerStyle}>
      <div className={navBalanceStyle}>
        <Navigation />
      </div>
      <div className={currencyStyle}>
        <Currency />
      </div>
    </div>
  );
};
