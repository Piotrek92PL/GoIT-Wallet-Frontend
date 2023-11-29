import { lazy } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={<PrivateRoute component={<HomePage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
      </Route>
    </Routes>
  );
};
