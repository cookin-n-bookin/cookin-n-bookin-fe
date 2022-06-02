import {
  fetchAllBooks,
  getBookById,
  getBooksByUserId,
} from '../services/books';
import { useState } from 'react';

export function useBooks() {
  const [bookList, setBookList] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [userBookList, setUserBookList] = useState([]);

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

  const getUserBooks = async (id) => {
    const usersBooks = await getBooksByUserId(id);
    console.log('usersBooks', usersBooks);
    setUserBookList(usersBooks.books);
  };

  return {
    bookList,
    getAllBooks,
    bookDetails,
    getSingleBook,
    userBookList,
    getUserBooks,
  };
}
