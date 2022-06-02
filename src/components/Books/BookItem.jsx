import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import styles from './Books.css';

export default function BookItem({ book }) {
  return (
    <>
      <div className={styles.book}>
        <Link to={`/books/${book.id}`}>
          <Image
            className={styles.image}
            cloudName="dwwab45mm"
            publicId={book.imageId || book.image_id}
          />
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <p className={styles.author}>{book.author}</p>
        </Link>
      </div>
    </>
  );
}
