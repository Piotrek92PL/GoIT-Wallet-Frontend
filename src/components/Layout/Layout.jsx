import css from './Layout.module.css';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

import { Suspense } from 'react';

export const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;
  let layoutStyle;
  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
    layoutStyle = css.layoutTabletDesktop;
  } else if (isTablet) {
    containerStyle += ` ${css.tablet}`;
    layoutStyle = css.layoutTabletDesktop;
  } else if (isMobile) containerStyle += ` ${css.mobile}`;

  return (
    <div className={layoutStyle}>
      <Header />
      <div className={containerStyle}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
