import { createContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { username: null });

  useEffect(() => {
    if (!user) return null;

    getUser().then(setUser);
    
  }, []);
  
  return (
    <UserContext.Provider value={{ user, setUser, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
