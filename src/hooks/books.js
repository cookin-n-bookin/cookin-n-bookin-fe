import { fetchAllBooks, getBookById } from '../services/books';
import { useState } from 'react';

export function useBooks() {
  const [bookList, setBookList] = useState([]);
  const [bookDetails, setBookDetails] = useState({});

  const getAllBooks = async () => {
    const booksList = await fetchAllBooks();
    setBookList(booksList);
  };

  const getSingleBook = async (id) => {
    console.log('id in hook', id);
    const res = await getBookById(id);
    console.log('response in hooks', res);
    setBookDetails(res);
  };

  return { bookList, getAllBooks, bookDetails, getSingleBook };
}
