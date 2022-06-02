import { useState } from 'react';
import useForm from '../../hooks/useForm';
import CloudinaryInput from '../Cloudinary/CloudinaryInput';
// import { Image } from 'cloudinary-react'
import useCloudinary from '../../hooks/cloudinary';


export default function AddBookForm({ label, onSubmit }) {
  const { formState, handleChange } = useForm({
    title: '',
    author: '',
    imageId: ''
  });

  const [error, setError] = useState('');

  const { publicId, uploadImage, setUploadedImage } = useCloudinary();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, author } = formState;
    // console.log('imageId', imageId)
    console.log('publicId', publicId)
    try {
      await onSubmit(title, author, publicId);
    } catch (error) {
      setError(error);
    }
  };
  
  return (
    <>
      <section>
        <p>Book Cover</p>
        <CloudinaryInput 
        publicId={publicId}
        setUploadedImage={setUploadedImage}
        uploadImage={uploadImage}
        />
      </section>

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

        <button 
        type="submit" 
        onSubmit={handleSubmit}
        disabled={!publicId}>
          Submit
        </button>
      </form>
      
      <p>{error.message}</p>
    </>
  );
}
