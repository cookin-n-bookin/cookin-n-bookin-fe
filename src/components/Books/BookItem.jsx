import { Link, useHistory } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import styles from './Books.css';
import { useUser } from '../../hooks/user';
import { addBookToUser } from '../../services/books';

export default function BookItem({ book }) {
  const { user, isLoading } = useUser();
  const { history } = useHistory();

  const handleClick = async () => {
    await addBookToUser(user.id, book.id);
    history.replace(`/users/${user.id}/books`);
  };

  if (isLoading) return null;

  return (
    <>
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
        <button className={styles.addButton} onClick={handleClick}>
          Add to My Shelf
        </button>
      </div>
    </>
  );
}
