import DetailTabs from '../../components/DetailTabs/DetailTabs';
import Header from '../../components/Header/Header';
import { useBooks } from '../../hooks/books';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import styles from '../../components/Books/Books.css';
import { Image } from 'cloudinary-react';

export default function BookDetail() {
  const { bookDetails, getSingleBook } = useBooks();
  const { id } = useParams();

  useEffect(() => {
    const getBookDetails = async () => {
      await getSingleBook(id);
    };
    getBookDetails();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.bookDetail}>
        <div>
          <Image
            className={styles.imageDetail}
            cloudName="dwwab45mm"
            publicId={bookDetails.imageId}
          />
        </div>
        <div>
          <h1 className={styles.bookTitle}>{bookDetails.title}</h1>
          <p className={styles.author}>{bookDetails.author}</p>
        </div>
      </div>
      <DetailTabs />
    </>
  );
}
