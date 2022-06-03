import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import styles from './Books.css';
import { useAuth, useUser } from '../../hooks/user';
import { addBookToUser } from '../../services/books';

export default function BookItem({ book }) {
  const { user, isLoading } = useUser();

  const handleClick = async () => {
    console.log('user.id in handlecliick', user.id);
    console.log('book.id in handlecliick', book.id);
    console.log('book in handlecliick', book);
    console.log('user in handlecliick', user);
    await addBookToUser(user.id, book.id);
  };

  if (isLoading) return null;
  console.log('isLoading', isLoading);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.book}>
          <Link to={`/books/${book.id || book.book_id}`}>
            <Image
              className={styles.image}
              cloudName="dwwab45mm"
              publicId={book.imageId || book.image_id}
            />
            <h1 className={styles.bookTitle}>{book.title}</h1>
            <p className={styles.author}>{book.author}</p>
          </Link>
          <button onClick={handleClick}>Add to My Shelf</button>
        </div>
      )}
    </>
  );
}
