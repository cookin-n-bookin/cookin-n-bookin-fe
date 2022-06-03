import { useEffect} from 'react';
import BooksList from '../../components/Books/BooksList';
import Header from '../../components/Header/Header';
import { useUser } from '../../hooks/user';
import { useBooks } from '../../hooks/books';

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
    <>
      <Header />
      <BooksList bookList={bookList}/>
    </>
  );
}
