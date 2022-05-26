import { signUpUser, signInUser } from '../services/users';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be called within a UserProvider');
  }

  const { setUser } = context;

  const signUp = async (username, password) => {
    try {
      const user = await signUpUser(username, password);
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (username, password) => {
    try {
      const user = await signInUser(username, password);
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  return { signUp, signIn };
};
