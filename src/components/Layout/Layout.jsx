import css from './Layout.module.css';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

export const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;
  if (isDesktop) containerStyle += ` ${css.desktop}`;
  else if (isTablet) containerStyle += ` ${css.tablet}`;
  else if (isMobile) containerStyle += ` ${css.mobile}`;

  return (
    <div className={containerStyle}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
