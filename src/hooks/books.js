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
  const [bookOwners, setBookOwners] = useState([]);

  const getAllBooks = async () => {
    const booksList = await fetchAllBooks();
    setBookList(booksList);
  };

  const getSingleBook = async (id) => {
    const res = await getBookById(id);
    setBookDetails(res);
  };

  const getUserBooks = async (id) => {
    const usersBooks = await getBooksByUserId(id);
    setUserBookList(usersBooks.books);
  };

  const getBookOwners = async (id) => {
    const book = await getBookById(id);
    setBookOwners(book.users);
  };

  return {
    bookList,
    getAllBooks,
    bookDetails,
    getSingleBook,
    userBookList,
    getUserBooks,
    bookOwners,
    getBookOwners,
  };
}
