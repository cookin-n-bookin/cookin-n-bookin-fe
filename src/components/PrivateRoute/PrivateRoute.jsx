import { useLocation, Route, Redirect } from 'react-router-dom';
import { useAuth, useUser } from '../../hooks/user';

export default function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <p>Loading....</p>;
  return (
    <Route {...rest}>
      {isLoggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/auth/sign_in',
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
}
