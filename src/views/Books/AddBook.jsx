import React from 'react';
import AddBookForm from '../../components/AddBookForm/AddBookForm';

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
      <h2>Add Book</h2>
      <AddBookForm onSubmit={handleAddBook} />
    </div>
  );
}
