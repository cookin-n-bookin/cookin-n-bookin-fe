import BooksList from '../../components/Books/BooksList';
import Header from '../../components/Header/Header';
import { useBooks } from '../../hooks/books';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../../components/Books/Books.css';
import { useUser } from '../../hooks/user';

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
      {userBookList 
      ?
      <>
      <BooksList bookList={userBookList}/>
      </>
      : ( <>
            <p className={styles.noBooks}>You haven't added any books to your shelf yet!</p>
          </>)
        }
    </div>
  )
}
