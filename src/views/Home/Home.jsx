import React from 'react';
import { useAuth, useUser } from '../../hooks/user';
import BooksList from '../../components/Books/BooksList';

export default function Home() {
  const { signOut } = useAuth();
  const { user } = useUser();
  
  return (
    <>
      <h1>Home</h1>
      <BooksList />
      {/* <button type="button" onClick={signOut}>
        Sign out
      </button> */}
    </>
  );
}
