import BookItem from './BookItem';
import styles from './Books.css';

export default function BooksList({ bookList, userBooks }) {
  return (
    <>
      <div className={styles.list}>
        {bookList.map((book) => {
          return (
            <BookItem
              key={`${book.id}-${book.title}`}
              book={book}
              userBooks={userBooks}
            />
          );
        })}
      </div>
    </>
  );
}
