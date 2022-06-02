import AddBookForm from '../../components/AddBookForm/AddBookForm';
import Header from '../../components/Header/Header';
import styles from '../../components/AddBookForm/AddBook.css';

import toast from 'react-hot-toast';
import { addBook } from '../../services/books';

export default function AddBook() {
  const handleAddBook = async (title, author, publicId) => {
    try {
      await addBook(title, author, publicId);
      toast('Your recipe book was successfully added!')
    } catch (error) {
      toast(`${error.message}`)
    }
  };

  return (
    <div>
      <Header />
      <p className={styles.addBookHeader}>Add a Book to Your Shelf</p>
      <AddBookForm onSubmit={handleAddBook} />
    </div>
  );
}
