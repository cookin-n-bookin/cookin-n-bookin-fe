import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  return (
    <UserContext.Provider
    value={{}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);

  if(context === undefined) {
    throw new Error('useUser must be called within a UserProvider');
  }

  return context.user;
}

export const useAuth = () => {
  const context = useContext(UserContext);

  if(context === undefined) {
    throw new Error('useUser must be called within a UserProvider');
  }

  return {};
}