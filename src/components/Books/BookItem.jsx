import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import styles from './Books.css';
import { useAuth, useUser } from '../../hooks/user';
import { addBookToUser } from '../../services/books';

export default function BookItem({ book }) {
  const { user, isLoading } = useUser();

  const handleClick = async () => {
    await addBookToUser(user.id, book.id);
  };

  if (isLoading) return null;

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.book}>
          <div>
            <Link to={`/books/${book.id || book.book_id}`}>
              <Image
                className={styles.image}
                cloudName="dwwab45mm"
                publicId={book.imageId || book.image_id}
              />
            </Link>
          </div>
          <div>
            <h1 className={styles.bookTitle}>{book.title}</h1>
            <p className={styles.author}>{book.author}</p>
            <button className={styles.addButton} onClick={handleClick}>
              Add to My Shelf
            </button>
          </div>
        </div>
      )}
    </>
  );
}
