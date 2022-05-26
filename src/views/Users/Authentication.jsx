import AuthForm from '../../components/AuthForm/AuthForm';
import { useHistory } from 'react-router-dom';

export default function Authentication({ isSigningUp = false }) {
  const history = useHistory();

  const handleSignUp = async (username, password) => {
    // await signUp({ username, password });
    // history.replace('/home');
  }

  const handleSignIn  = async (username, password) => {
    console.log('handleSignIn function called')
    // await signIn({ username, password });
    // history.replace('/home');
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
