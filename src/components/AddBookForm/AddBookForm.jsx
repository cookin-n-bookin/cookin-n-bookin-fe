import { useState } from 'react';
import useForm from '../../hooks/useForm';

export default function AddBookForm({ label, onSubmit }) {
  const { formState, handleChange } = useForm({
    title: '',
    author: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, author } = formState;
    try {
      await onSubmit(title, author);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <form aria-label="form" onSubmit={handleSubmit}>
        <section>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            required
            value={formState.title}
            onChange={handleChange}
          />
        </section>

        <section>
          <input
            type="text"
            name="author"
            placeholder="Book Author"
            required
            value={formState.author}
            onChange={handleChange}
          />
        </section>

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
      <p>{error.message}</p>
    </>
  );
}
