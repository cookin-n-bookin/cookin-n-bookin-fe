import BooksList from '../../components/Books/BooksList';
import Header from '../../components/Header/Header';
import { useBooks } from '../../hooks/books';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/user';
import { useEffect } from 'react';

export default function UsersBooks() {
  const { userBookList, getUserBooks } = useBooks();
  const { id } = useParams();

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
      <BooksList bookList={userBookList}/>
    </div>
  )
}
