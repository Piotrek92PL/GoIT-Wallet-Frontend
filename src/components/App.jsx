import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
// import { PrivateRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
import { selectIsLoading } from '../redux/global/selectors';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const DiagramPage = lazy(() => import('../pages/DiagramPage/DiagramPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            // element={<PrivateRoute component={<HomePage />} />}
            element={<HomePage />} // for work
          />
          <Route
            path="/diagram"
            // element={<PrivateRoute component={DiagramPage />} />}
            element={<DiagramPage />} // for work
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
    </>
  );
};
