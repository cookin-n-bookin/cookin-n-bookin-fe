import DetailTabs from '../../components/DetailTabs/DetailTabs';
import Header from '../../components/Header/Header';
import { useBooks } from '../../hooks/books';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../hooks/user';
import { useEffect } from 'react';
import styles from '../../components/Books/Books.css';
import { Image } from 'cloudinary-react';

export default function BookDetail() {
  const { bookDetails, getSingleBook } = useBooks();
  const { id } = useParams();
  const { setIsLoading } = useUser();
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
      <div className={styles.bookDetail}>
          <Image
            className={styles.image}
            cloudName="dwwab45mm"
            publicId={bookDetails.imageId}
          />
         <div>
         <h1 className={styles.bookTitle}>{bookDetails.title}</h1>
          <p className={styles.author}>{bookDetails.author}</p>
          <p>update button here</p>
         </div>
      </div>    
      <DetailTabs />
      </>
    
  )
}
