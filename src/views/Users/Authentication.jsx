import AuthForm from '../../components/AuthForm/AuthForm';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/user';
import { Link } from 'react-router-dom';

export default function Authentication({ isSigningUp }) {
  const history = useHistory();
  const { signUp, signIn } = useAuth();

  const handleSignUp = async (username, password) => {
    await signUp(username, password);
    history.replace('/home');
  }

  const handleSignIn  = async (username, password) => {
    await signIn(username, password);
    history.replace('/home');
  } 

  return (
    <>
      {isSigningUp 
        ? <>
            <h2>Sign Up</h2>
            <AuthForm onSubmit={handleSignUp}/>
            <p>Already have an account?</p>
            <Link 
              to="/auth/sign_in">
              Sign In Here
            </Link>
          </> 
        : <>
            <h2>Sign In</h2>
            <AuthForm onSubmit={handleSignIn}/>
            <p>Don't have an account?</p>
            <Link 
              to="/auth/sign_up">
              Sign Up Here
            </Link>
          </>
        }
    </>
  )
}
