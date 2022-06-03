import styles from './Title.css';

export default function Title() {

    const colors = ['#FFC94D', '#F4364C', '#82A3FF', '#AADB1E', '#D16B17', '#FFA6C9', '#C6A1CF'];

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
