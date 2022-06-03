import AuthForm from '../../components/AuthForm/AuthForm';
import { useHistory } from 'react-router-dom';
import { useAuth, useUser } from '../../hooks/user';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Header from '../../components/Header/Header';
import styles from '../../components/AuthForm/Auth.css';

export default function Authentication({ isSigningUp }) {
  const history = useHistory();
  const { signUp, signIn } = useAuth();
  // const { user } = useUser();

  const handleSignUp = async (username, password) => {
    await signUp(username, password);
    history.replace('/books');
    toast(`Thanks for joining, ${username}!`);
  };

  const handleSignIn = async (username, password) => {
    await signIn(username, password);
    history.replace('/books');
    toast(`Welcome back, ${username}!`);
  };

  return (
    <>
      <Header />
      <div className={styles.authFormContainer}>
        {isSigningUp ? (
          <div>
            <h2>Sign Up</h2>
            <AuthForm onSubmit={handleSignUp} />
            <p>Already a member?</p>
            <Link to="/auth/sign_in">Sign In</Link>
          </div>
        ) : (
          <div>
            <h2>Sign In</h2>
            <AuthForm onSubmit={handleSignIn} />
            <p>Not a member yet?</p>
            <Link to="/auth/sign_up">Sign Up</Link>
          </div>
        )}
      </div>
    </>
  );
}
