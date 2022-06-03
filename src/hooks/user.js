import { signUpUser, signInUser, signOutUser } from '../services/users';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useAuth must be called within a UserProvider');
  }

  const { user, setUser, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn } =
    context;

  useEffect(() => {
    console.log('!!user.username', !!user.username);
    console.log('user', user);
    setIsLoggedIn(!!user.username);
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
    const user = await signOutUser();
    setUser({});
    toast('See you next time!');
  };

  // if (isLoading) return null;
  return { signUp, signIn, signOut, isLoggedIn, isLoading, setIsLoading };
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be called within a UserProvider');
  }

  const { user, setUser } = context;

  return { user, setUser };
};
