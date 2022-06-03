import { useEffect} from 'react';
import BooksList from '../../components/Books/BooksList';
import Header from '../../components/Header/Header';
import { useUser } from '../../hooks/user';
import { useBooks } from '../../hooks/books';
import styles from '../../components/Books/Books.css';

export default function Home() {
  const { setIsLoading } = useUser();
  const { bookList, getAllBooks } = useBooks();

  useEffect(() => {
    const setBookList = async () => {
      await getAllBooks();
    };
    setBookList();
  }, []);

  return (
    <div>
      <Header />
      <h1 className={styles.mainShelf}>All The Cook's Books</h1>
      <BooksList bookList={bookList}/>
    </div>
  );
}
