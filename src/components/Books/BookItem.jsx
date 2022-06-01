import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

export default function BookItem({ book }) {
  return (
    <>
    <div>
        <Link to={`/books/${book.id}`}>
        <Image 
            style={{ width: 200 }}
            cloudName="dwwab45mm" 
            publicId={book.imageId}
          />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
        </Link>
    </div>
    </>
  )
}
