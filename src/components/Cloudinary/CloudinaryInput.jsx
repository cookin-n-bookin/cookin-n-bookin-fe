import React from 'react'
import { Image } from 'cloudinary-react'

import useCloudinary from '../../hooks/cloudinary'

export default function CloudinaryInput({ publicId, setUploadedImage, uploadImage }) {
  
  return (
    <>
      <input 
        type="file"
        required
        onChange={(e) => {
          setUploadedImage(e.target.files[0])
          console.log('files', e.target.files[0])
        }}
        />
        <button
          onClick={uploadImage}>Upload Image</button>
          <Image 
            style={{ width: 200 }}
            cloudName="dwwab45mm" 
            publicId={publicId}
          />
    </>
  )
}
