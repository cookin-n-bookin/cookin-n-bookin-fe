import { useAuth } from '../../hooks/user';
import { Link } from 'react-router-dom';
import style from '../Header/Header.css';

export default function AuthButton() {
  const { isLoggedIn, signOut } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <button className={style.authBtn} onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <Link to="/auth/sign_in">
          <button className={style.authBtn}>Sign In</button>
        </Link>
      )}
    </>
  );
}
