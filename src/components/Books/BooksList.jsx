import BookItem from './BookItem';
import { useEffect, useState } from 'react';
import fetchAllBooks from '../../services/books';
import { useAuth, useUser } from '../../hooks/user';

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const { isLoading, setIsLoading } = useUser();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const getBooks = async () => {
      setIsLoading(true);
      const booksList = await fetchAllBooks();
      setBooks(booksList);
      setIsLoading(false);
    };
    getBooks();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h3>Books List</h3>
      <div>
        {books.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </div>
    </>
  );
}
