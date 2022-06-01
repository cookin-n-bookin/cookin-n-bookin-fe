import BookItem from './BookItem';
import { useEffect, useState } from 'react';
import BooksFetch from '../../utils/BooksFetch';

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      const booksList = await BooksFetch();

      setBooks(booksList);
      setLoading(false);
    };
    getBooks();
  }, []);

  return (
    <>
      <h3>Books List</h3>
      {loading ? (
        <p>loading ...</p>
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
