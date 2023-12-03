import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn; //&&!isRefreshing

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
