import BookItem from './BookItem';
import { useEffect, useState } from 'react';
import { useUser } from '../../hooks/user';
import { useBooks } from '../../hooks/books';

export default function BooksList() {
  const { isLoading, setIsLoading } = useUser();
  const { bookList, getAllBooks } = useBooks();

  useEffect(() => {
    const setBookList = async () => {
      setIsLoading(true);
      await getAllBooks();
      setIsLoading(false);
    };
    setBookList();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h3>Books List</h3>
      <div>
        {bookList.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </div>
    </>
  );
}
