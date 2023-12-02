import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './WalletWithIcon.module.css';

export const WalletWithIcon = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;
  let iconStyle = css.icon;
  let walletStyle;

  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
    iconStyle += ` ${css.iconTabletDesktop}`;
    walletStyle = ` ${css.walletTabletDesktop}`;
  } else if (isTablet) {
    containerStyle += ` ${css.tablet}`;
    iconStyle += ` ${css.iconTabletDesktop}`;
    walletStyle = ` ${css.walletTabletDesktop}`;
  } else if (isMobile) {
    containerStyle += ` ${css.mobile}`;
    iconStyle += ` ${css.iconMobile}`;
    walletStyle = ` ${css.walletMobile}`;
  }
  return (
    <div className={containerStyle}>
      <div className={iconStyle}></div>
      <p className={walletStyle}>Wallet</p>
    </div>
  );
};
