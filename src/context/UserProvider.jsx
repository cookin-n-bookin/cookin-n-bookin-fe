import { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser()
    .then(setUser);
  }, [])
  
  return (
    <UserContext.Provider
    value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
