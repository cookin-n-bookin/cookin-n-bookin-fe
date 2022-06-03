import { Image } from 'cloudinary-react';
import styles from './Cloudinary.css';

export default function CloudinaryInput({
  publicId,
  setUploadedImage,
  uploadImage,
}) {
  return (
    <>
      <div className={styles.upload}>
        <Image
          style={{ width: 200 }}
          cloudName="dwwab45mm"
          publicId={publicId}
        />
        <input
          type="file"
          required
          onChange={(e) => {
            setUploadedImage(e.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload Image</button>
      </div>
    </>
  );
}
