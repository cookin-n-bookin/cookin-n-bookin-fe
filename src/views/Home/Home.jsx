import { useEffect } from 'react';
import BooksList from '../../components/Books/BooksList';
import Header from '../../components/Header/Header';
import { useUser } from '../../hooks/user';
import { useBooks } from '../../hooks/books';
import styles from '../../components/Books/Books.css';

export default function Home() {
  const { user, isLoading } = useUser();
  const { bookList, getAllBooks } = useBooks();

  useEffect(() => {
    if (isLoading && !user.id) return null;
    const fetchBookList = async () => {
      await getAllBooks();
    };
    fetchBookList();
  }, []);

  return (
    <div>
      <Header />

      <h1 className={styles.mainShelf}>All The Cooks Books</h1>
      <BooksList bookList={bookList} />
    </div>
  );
}
