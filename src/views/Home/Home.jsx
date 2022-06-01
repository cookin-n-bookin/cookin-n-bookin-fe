import React from 'react';
import { useAuth, useUser } from '../../hooks/user';
import BooksList from '../../components/Books/BooksList';
import Header from '../../components/Header/Header';

export default function Home() {
  const { signOut } = useAuth();
  const { user } = useUser();
  
  return (
    <>
      <Header />
      <BooksList />
      {/* <button type="button" onClick={signOut}>
        Sign out
      </button> */}
    </>
  );
}
