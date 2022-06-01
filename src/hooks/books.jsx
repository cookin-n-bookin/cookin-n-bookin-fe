import fetchAllBooks from '../services/books';
import { useState } from 'react';

export default function useBooks() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const booksList = await fetchAllBooks();
    setBooks(booksList);
  };

  return { books, getAllBooks }
}
