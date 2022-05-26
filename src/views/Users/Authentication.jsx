import AuthForm from '../../components/AuthForm/AuthForm';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function Authentication({ isSigningUp = false }) {
  const history = useHistory();
  const { signUp } = useAuth();

  const handleSignUp = async (username, password) => {
    await signUp(username, password);
    history.replace('/home');
  }

  const handleSignIn  = async (username, password) => {
    await signIn(username, password);
    history.replace('/home');
  } 

  if(isSigningUp) {
    return (
      <AuthForm onSubmit={handleSignUp}/>
    )
  } else {
    return (
      <AuthForm onSubmit={handleSignIn}/>
    )
  }
}
