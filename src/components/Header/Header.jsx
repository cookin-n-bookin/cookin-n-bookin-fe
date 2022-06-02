import AuthButton from '../AuthButton/AuthButton';
import { useUser } from '../../hooks/user';
import { useAuth } from '../../hooks/user';
import { useState } from 'react';
import styles from './Header.css';
import Title from './Title';
import Menu from './Menu';

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
    
     <Menu />
     <Title />
    </>
  );
}
