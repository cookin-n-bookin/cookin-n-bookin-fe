import { useLocation, Route, Redirect } from 'react-router-dom';
import { useUser } from '../../hooks/user'

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  const location = useLocation();

  return (
    <Route {...rest}>
      {user.username
        ? (children)
        : <Redirect to={{
          pathname: 'auth/sign_in',
          state: { from: location }
        }}/>
      }
    </Route>
  )
}
