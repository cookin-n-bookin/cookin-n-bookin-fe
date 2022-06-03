import { createContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: null });
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user.username) return;
    // setIsLoading(true);
    getUser()
      .then((response) => setUser(response))
      .then(() => setIsLoggedIn(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
