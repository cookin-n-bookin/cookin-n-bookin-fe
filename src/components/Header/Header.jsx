import styles from './Header.css';
import Title from './Title';
import Menu from './Menu';

export default function Header() {
  return (
    <>
      <div className={styles.nav}>
        <Menu />
        <Title />
      </div>
    </>
  );
}
