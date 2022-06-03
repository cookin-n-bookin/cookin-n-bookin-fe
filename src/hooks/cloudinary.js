import { useState } from 'react';
import toast from 'react-hot-toast';

export default function useCloudinary() {
  const [uploadedImage, setUploadedImage] = useState('');
  const [publicId, setPublicId] = useState('');

  const url = 'https://api.cloudinary.com/v1_1/dwwab45mm/image/upload';

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', uploadedImage);
    formData.append('upload_preset', 'f7aubu9z');

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((finalRes) => {
        setPublicId(finalRes.public_id);
        toast('Image uploaded successfully!');
      });
  };

  return {
    uploadImage,
    setUploadedImage,
    publicId,
  };
}
