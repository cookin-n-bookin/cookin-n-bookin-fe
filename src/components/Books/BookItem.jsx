import { Link } from 'react-router-dom';

export default function BookItem({ book }) {
  return (
    <>
    <div>
        <Link to={`/books/${book.id}`}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.imageId}</p>
        </Link>
    </div>
    </>
  )
}
