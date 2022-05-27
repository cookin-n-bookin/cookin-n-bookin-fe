import AuthForm from '../../components/AuthForm/AuthForm';
import { useHistory } from 'react-router-dom';
import { useAuth, useUser } from '../../hooks/user';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Authentication({ isSigningUp }) {
  const history = useHistory();
  const { signUp, signIn } = useAuth();
  const { user } = useUser();

  const handleSignUp = async (username, password) => {
    await signUp(username, password);
    history.replace('/home');
    toast(`Thanks for joining, ${username}!`)
  }

  const handleSignIn  = async (username, password) => {
    await signIn(username, password);
    history.replace('/home');
    toast(`Welcome back, ${username}!`)
  } 

  return (
    <>
      {isSigningUp 
        ? <>
            <h2>Sign Up</h2>
            <AuthForm onSubmit={handleSignUp}/>
            <p>Already a member?</p>
            <Link 
              to="/auth/sign_in">
              Sign In Here
            </Link>
          </> 
        : <>
            <h2>Sign In</h2>
            <AuthForm onSubmit={handleSignIn}/>
            <p>Not a member yet?</p>
            <Link 
              to="/auth/sign_up">
              Sign Up Here
            </Link>
          </>
        }
    </>
  )
}
