import { useAuth, useUser } from '../../hooks/user'
import { Link } from 'react-router-dom';

export default function AuthButton() {
  const { isLoggedIn, signOut } = useAuth();

  return (
    <>
    {isLoggedIn
      ? (<button onClick={signOut}>Sign Out</button>)
      : (<Link to="/auth/sign_in">
          <button>Sign In</button>
        </Link> )
      }
    </>
  )
}
