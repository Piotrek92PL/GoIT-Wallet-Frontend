import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTransactions } from 'redux/transactions/operations';
import { useMediaQuery } from 'react-responsive';
import css from './NavBalanceCurrency.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';
import { Balance } from 'components/Balance/Balance';

export const NavBalanceCurrency = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  let containerStyle = css.container;
  let navBalanceStyle = css.navBalance;
  let currencyStyle;

  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
    navBalanceStyle += ` ${css.navBalanceDesktop}`;
  } else if (isTablet) {
    containerStyle += ` ${css.tablet}`;
    navBalanceStyle += ` ${css.navBalanceTablet}`;
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
        <Balance />
      </div>
      <div className={currencyStyle}>
        <Currency />
      </div>
    </div>
  );
};
