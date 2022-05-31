import React from 'react';
import { useAuth, useUser } from '../../hooks/user';

export default function Home() {
  const { signOut } = useAuth();
  const { user } = useUser();
  
  return (
    <>
      <h1>Home</h1>
      {/* <button type="button" onClick={signOut}>
        Sign out
      </button> */}
    </>
  );
}
