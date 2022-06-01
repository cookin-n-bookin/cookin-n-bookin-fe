import { useState } from 'react';

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
        console.log('response in hook', response);
        return response.json();
      })
      .then((finalRes) => {
        console.log('finalRes', finalRes);
        setPublicId(finalRes.public_id);
      });
  };

  return {
    uploadImage,
    setUploadedImage,
    publicId,
  };
}
