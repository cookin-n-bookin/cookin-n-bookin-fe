import BookItem from './BookItem';
import { useEffect } from 'react';
import { useUser } from '../../hooks/user';
import { useBooks } from '../../hooks/books';
import styles from './Books.css';

export default function BooksList() {
  const { setIsLoading } = useUser();
  const { bookList, getAllBooks } = useBooks();

  useEffect(() => {
    const setBookList = async () => {
      setIsLoading(true);
      await getAllBooks();
      setIsLoading(false);
    };
    setBookList();
  }, []);

  return (
    <>
      <h3>Books List</h3>
      <div className={styles.list}>
        {bookList.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </div>
    </>
  );
}
