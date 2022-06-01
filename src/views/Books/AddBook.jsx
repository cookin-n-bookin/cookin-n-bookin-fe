import React from 'react';
import AddBookForm from '../../components/AddBookForm/AddBookForm';

import toast from 'react-hot-toast';

export default function AddBook() {
  const handleAddBook = async (title, author) => {
    console.log('Title: ', title);
    console.log('Author: ', author);
    toast(`Thanks for adding ${title} by ${author}!`);
  };

  return (
    <div>
      <h2>Add Book</h2>
      <AddBookForm onSubmit={handleAddBook} />
    </div>
  );
}
