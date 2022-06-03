import BooksList from '../../components/Books/BooksList';
import Header from '../../components/Header/Header';
import { useBooks } from '../../hooks/books';
import { useParams } from 'react-router-dom';
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
      {userBookList
        ? (<>
            <h2>My Book Shelf</h2>
            <BooksList bookList={userBookList} />
          </>)
        : ( <>
              <h2>My Book Shelf</h2>
              <p>You haven't added any books to your shelf yet!</p>
            </>)
        }
      
    </div>
  )
}
