import fetchAllBooks from '../services/books';
import { useState } from 'react';

export function useBooks() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const booksList = await fetchAllBooks();
    setBooks(booksList);
  };

  return { books, getAllBooks };
}
