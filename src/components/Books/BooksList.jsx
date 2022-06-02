import BookItem from './BookItem';
import styles from './Books.css';

export default function BooksList({ bookList }) {

  return (
    <>
      <div className={styles.list}>
        {bookList.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </div>
    </>
  );
}
