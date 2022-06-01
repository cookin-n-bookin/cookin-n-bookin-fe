import { fetchAllBooks, getBookById } from '../services/books';
import { useState } from 'react';

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

  const getAllBooks = async () => {
    const booksList = await fetchAllBooks();
    setBooks(booksList);
  };

  const getSingleBook = async (id) => {
    const res = await getBookById(id);
    setBook(res);
  };

  return { books, getAllBooks, book, getSingleBook };
}
