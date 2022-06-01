import AuthButton from '../AuthButton/AuthButton'
import { useUser } from '../../hooks/user';
import { useState } from 'react';
import style from './Header.css';
import { Link } from 'react-router-dom';

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
        <button className={style.openMain}
          onClick={handleOpen}
        style={openNav ? {marginLeft: '250px'} : {marginLeft: '0px'}}>☰ Menu</button>
      </div>
      <div className={style.sidebar}
          style={closeNav ? {width: '0px'} : {width: '250px'}}>
        <p className={style.closeBtn} onClick={handleClose}>X</p>
        <Link>
          <p>Home</p>
        </Link>
        <Link>
          <p>About</p>
        </Link>
      <AuthButton />
      </div>
    </>
  )
}
