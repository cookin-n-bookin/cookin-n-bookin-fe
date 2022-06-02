import styles from './Title.css';

export default function Title() {

    const colors = ['#FDDA16', '#F4364C', '#82A3FF', '#AADB1E', '#587EDE', '#587EDE', '#71A92C', '#FFAD00', '#FFA6C9', '#CD001A', '#C6A1CF'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const randomColorTwo = colors[Math.floor(Math.random() * colors.length)];

  return (
 <>
    <div className={styles.title}>
      <p style={ {color: randomColor} }>cooks</p>
      <p style={ {color: randomColorTwo} }>books</p>
    </div>
 </>
  );
}
