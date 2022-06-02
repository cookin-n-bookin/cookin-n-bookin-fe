import Header from '../../components/Header/Header';
import { useBooks } from '../../hooks/books';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../hooks/user';
import { useEffect } from 'react';


export default function BookDetail() {
  const { bookDetails, getSingleBook } = useBooks();
  const { id } = useParams();
  const { isLoading, setIsLoading } = useUser();
  console.log('book in detail page', bookDetails)

  useEffect(() => {
    const getBookDetails = async () => {
      setIsLoading(true);
      await getSingleBook(id);
      setIsLoading(false);
    }
    getBookDetails();
  }, [])
  
  return (
      <>
      <Header />
      <div>BookDetail
        <p>{bookDetails.title}</p>
      </div>
      </>
    
  )
}
