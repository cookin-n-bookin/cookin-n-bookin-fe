import { useLocation, Route, Redirect } from 'react-router-dom';
import { useUser } from '../../hooks/user'

export default function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useUser();
  const location = useLocation();

  if(isLoading)
  <h1>Loading...</h1>
  return (
    <Route {...rest}>
      {user.username
        ? (children)
        : <Redirect to={{
          pathname: '/auth/sign_in',
          state: { from: location }
        }}/>
      }
    </Route>
  )
}
