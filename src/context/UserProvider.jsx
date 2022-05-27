import { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!user) return null;
    getUser().then(setUser);
  }, []);
  console.log('user:', user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
