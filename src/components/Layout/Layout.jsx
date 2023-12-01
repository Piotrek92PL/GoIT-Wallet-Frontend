import css from './Layout.module.css';

import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

import { Suspense } from 'react';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <div className={css.container}>
      {isLoggedIn && isRefreshing && <Header />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
