import BooksList from '../../components/Books/BooksList';
import Header from '../../components/Header/Header';
import { useBooks } from '../../hooks/books';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/user';
import { useEffect } from 'react';
import styles from '../../components/Books/Books.css';

export default function UsersBooks() {
  const { userBookList, getUserBooks } = useBooks();
  const { id } = useParams();
  const { user } = useUser();

  useEffect(() => {
    
    if(userBookList.length) return null;

    const setUserBookList = async (id) => {
      await getUserBooks(id);
    }
    setUserBookList(id);
  }, [])
  
  return (
    <div>
      <Header />
      <h1 className={styles.userShelf}>{`${user.username}'s Books`}</h1>
      <BooksList bookList={userBookList}/>
    </div>
  )
}
