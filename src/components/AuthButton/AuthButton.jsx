import { useAuth } from '../../hooks/user';
import { Link } from 'react-router-dom';
import styles from '../Header/Menu.css';

export default function AuthButton() {
  const { isLoggedIn, signOut } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <button className={styles.authBtn} onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <Link to="/auth/sign_in">
          <button className={styles.authBtn}>Sign In</button>
        </Link>
      )}
    </>
  );
}
