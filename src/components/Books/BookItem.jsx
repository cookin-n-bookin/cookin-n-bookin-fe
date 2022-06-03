import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import styles from './Books.css';
import { useUser } from '../../hooks/user';
import { addBookToUser } from '../../services/books';
import { useEffect } from 'react';

export default function BookItem({ book, userBooks }) {
  const { user, isLoading } = useUser();

  const handleClick = async () => {
    await addBookToUser(user.id, book.id);
  };

  if (isLoading) return null;
  if (!userBooks)
    return (
      <>
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
          </div>
        </div>
      </>
    );

  const onShelf = !!userBooks.find((myBook) => book.id === myBook.book_id);
  console.log(onShelf);
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
        {!onShelf ? (
          <button className={styles.addButton} onClick={handleClick}>
            Add to My Shelf
          </button>
        ) : (
          <p>On your shelf</p>
        )}
      </div>
    </>
  );
}
