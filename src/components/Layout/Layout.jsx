import css from './Layout.module.css';

import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

import { Suspense } from 'react';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      {isLoggedIn && <Header />}
      {/* <Header /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
