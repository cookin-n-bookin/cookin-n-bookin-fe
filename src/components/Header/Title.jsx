import styles from './Title.css';

export default function Title() {

    const colors = ['#FFEF00', '#F4364C', '#82A3FF', '#AADB1E'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const randomColorTwo = colors[Math.floor(Math.random() * colors.length)];

  return (
 <>
    <div className={styles.title}>
      <p style={ {color: randomColor} }>back</p>
      <p style={ {color: randomColorTwo} }>burner</p>
    </div>
 </>
  );
}
