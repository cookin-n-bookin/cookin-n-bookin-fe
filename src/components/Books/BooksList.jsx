import BookItem from './BookItem';
import { useEffect, useState } from 'react';
import allBooksFetch from '../../services/allBooksFetch';
import { useAuth, useUser } from '../../hooks/user';

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const { isLoading } = useUser();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const getBooks = async () => {
      const booksList = await allBooksFetch();

      setBooks(booksList);
      isLoading === false;
    };
    getBooks();
  }, []);

  if (isLoggedIn && !isLoading) return null;

  return (
    <>
      <h3>Books List</h3>
      {isLoading ? (
        <p>loading ...</p>
      ) : isLoggedIn ? (
        <p>users shelf</p>
      ) : (
        <div>
          {books.map((book) => {
            return <BookItem key={book.id} book={book} />;
          })}
        </div>
      )}
    </>
  );
}
