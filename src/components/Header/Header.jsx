import AuthButton from '../AuthButton/AuthButton'
import { useUser } from '../../hooks/user';
import { useState } from 'react';
import style from './Header.css';

export default function Header() {
  const { currentUser } = useUser();
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
        <button className={style.openBtn} onClick={handleOpen}>☰ Menu</button>
      </div>
      <AuthButton />
    </>
  )
}
