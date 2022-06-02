import styles from './Menu.css';
import { NavLink } from 'react-router-dom';
import AuthButton from '../AuthButton/AuthButton';
import { useUser } from '../../hooks/user';
import { useAuth } from '../../hooks/user';
import { useState } from 'react';

export default function Menu() {
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
      <div className={styles.menu}>
        <button
          className={styles.openMain}
          onClick={handleOpen}
          style={openNav ? { marginLeft: '250px' } : { marginLeft: '0px' }}
        >
          ☰
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
          <div className={styles.menuItems}>
            <NavLink activeClassName={styles.active} to="/home">
              Browse Books
            </NavLink>
            <AuthButton />
          </div>
        ) : (
          <div className={styles.menuItems}>
            <NavLink activeClassName={styles.active} to="/home">
              Browse Books
            </NavLink>
            <NavLink activeClassName={styles.active} to="/add">
              Add New Book
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={`/users/${user.id}/books`}
            >
              My Shelf
            </NavLink>
            <AuthButton />
          </div>
        )}
      </div>
    </>
  );
}
