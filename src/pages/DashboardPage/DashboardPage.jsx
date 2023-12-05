import React, { Suspense } from 'react';
import Media from 'react-media';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { Balance } from '../../components/Balance/Balance';                     // <--- Add Balance
import { Currency } from '../../components/Currency/Currency';                  // <--- Add Currency
// import { ModalAddTransaction } from '../../components/ModalAddTransaction/ModalAddTransaction';     // <--- Add ModalAddTransaction
// import { ModalEditTransaction } from '../../components/ModalEditTransaction/ModalEditTransaction';  // <--- Add ModalEditTransaction
// import { ModalLogout } from '../../components/ModalLogout/ModalLogout';
import css from './DashboardPage.module.css';

const CommonComponents = () => (
  <>
    {/*<ModalAddTransaction />
    <ModalEditTransaction /> 
    <ModalLogout />*/}
    <Outlet />
  </>
);

const Dashboard = ({ isMobile, isTablet, isDesktop }) => {
  let containerStyle = css.mobileContainer;
  if (isDesktop) {
    containerStyle = css.desktopContainer;
  } else if (isTablet) {
    containerStyle = css.tabletContainer;
  }

  return (
    <>
      <Header />
      <div className={containerStyle}>
        <Suspense fallback={null}>
          <Navigation />
          {isTablet && <Balance />}
          {isDesktop && <Currency />}
          <CommonComponents />
        </Suspense>
      </div>
    </>
  );
};

export default function DashboardPage() {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1279px)',
        desktop: '(min-width: 1280px)',
      }}
    >
      {({ mobile, tablet, desktop }) => (
        <Dashboard isMobile={mobile} isTablet={tablet} isDesktop={desktop} />
      )}
    </Media>
  );
}
