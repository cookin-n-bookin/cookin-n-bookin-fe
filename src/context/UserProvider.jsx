import { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { username: null});
  console.log('user in context', user)

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
