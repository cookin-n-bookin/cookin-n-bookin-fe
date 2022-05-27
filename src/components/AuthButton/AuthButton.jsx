import { useAuth } from '../../hooks/user'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AuthButton() {
  const { isLoggedIn, signOut } = useAuth();
  console.log('isLoggedIn authButton component', isLoggedIn)

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
