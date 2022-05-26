import { signUpUser } from '../services/users';

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be called within a UserProvider');
  }

  const signUp = async (email, password) => {
    await signUpUser(email, password);
  };

  return { signUp };
};
