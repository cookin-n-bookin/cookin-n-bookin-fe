import { signUpUser, signInUser, signOutUser } from '../services/users';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

export const useAuth = () => {
  const context = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (context === undefined) {
    throw new Error('useAuth must be called within a UserProvider');
  }

  const { user, setUser } = context;

  useEffect(() => {
    setIsLoggedIn(!!user.username);
    console.log('useEffect called user.username', user.username);
  }, [user.username]);

  const signUp = async (username, password) => {
    try {
      const { user } = await signUpUser(username, password);
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (username, password) => {
    try {
      const { user } = await signInUser(username, password);
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    console.log('signOut');
    const user = await signOutUser();
    setUser({});
  };

  return { signUp, signIn, signOut, isLoggedIn };
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be called within a UserProvider');
  }

  const { user, setUser } = context;

  return { user, setUser };
};
