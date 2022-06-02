import AuthButton from '../AuthButton/AuthButton';
import { useUser } from '../../hooks/user';
import { useAuth } from '../../hooks/user';
import { useState } from 'react';
import styles from './Header.css';
import { NavLink } from 'react-router-dom';
import Title from './Title';

export default function Header() {
  const { user } = useUser();
  const { isLoggedIn } = useAuth();
  const [openNav, setOpenNav] = useState(false);
  const [closeNav, setCloseNav] = useState(true);

  function handleOpen() {
    setOpenNav(true);
    setCloseNav(false);
  }

  function handleClose() {
    setCloseNav(true);
    setOpenNav(false);
  }

  return (
    <>
    
      <div>
        <button
          className={styles.openMain}
          onClick={handleOpen}
          style={openNav ? { marginLeft: '250px' } : { marginLeft: '0px' }}
        >
          ☰ Menu
        </button>
      </div>
      <div
        className={styles.sidebar}
        style={closeNav ? { width: '0px' } : { width: '250px' }}
      >
        <p className={styles.closeBtn} onClick={handleClose}>
          X
        </p>
        {!isLoggedIn ? (
          <>
            <NavLink activeClassName={styles.active} to="/books">
              Browse Books
            </NavLink>
            <AuthButton />
          </>
        ) : (
          <>
            <NavLink activeClassName={styles.active} to="/books">
              Browse Books
            </NavLink>
            <NavLink activeClassName={styles.active} to="/books/new">
              Add New Book
            </NavLink>
            <NavLink activeClassName={styles.active} to={`/users/${user.id}/books`}>
              My Shelf
            </NavLink>
            <AuthButton />
          </>
        )}
      </div>
     <Title />
    </>
  );
}
