import styles from './StylesTab.css';
import { useBooks } from '../../hooks/books';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

export default function OwnersTab() {
  const { bookOwners, getBookOwners } = useBooks();
  const { id } = useParams();

  useEffect(() => {
    const setBookOwnerList = async () => {
      await getBookOwners(id);
    }
    setBookOwnerList();
  }, [])


  console.log('bookOwners in OwnersTab', bookOwners)

  return (
    <div>
      {bookOwners.map((owner) => <p>{owner.username}</p>)}

    </div>
  )
}
