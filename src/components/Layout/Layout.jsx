import css from './Layout.module.css';

import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
