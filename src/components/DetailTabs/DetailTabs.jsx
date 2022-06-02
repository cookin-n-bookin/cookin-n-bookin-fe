import { useState } from 'react';
import styles from './StylesTab.css';

export default function DetailTabs() {
  const [activeTab, setActiveTab] = useState('recipeTab');

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabNav}>
        <li
          className={`${activeTab === 'recipeTab' ? `${styles.active}` : ''}`}
        >
          Recipes
        </li>
        <li className={`${activeTab === 'reviewsTab' ? `${styles.active}` : ''}`}>
          Current Owners
        </li>
        <li>Reviews</li>
        <li>Images</li>
      </ul>
      <div className={styles.outlet}></div>
    </div>
  );
}
