import { createContext, useState, useEffect } from 'react';
import { getCookie, getUser } from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.username) return;

    getUser()
      .then((response) => setUser(response))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
