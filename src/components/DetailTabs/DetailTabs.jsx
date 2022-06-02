import { useState } from 'react';
import styles from './StylesTab.css';
import RecipesTab from './RecipesTab';
import ReviewsTab from './ReviewsTab';

export default function DetailTabs() {
  const [activeTab, setActiveTab] = useState('recipesTab');

  const handleRecipesTab = () => {
    setActiveTab('recipesTab');
  };

  const handleReviewsTab = () => {
    setActiveTab('reviewsTab');
  };

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabNav}>
        <li
          className={`${activeTab === 'recipesTab' ? `${styles.active}` : ''}`}
        >
          Recipes
        </li>
        <li className={`${activeTab === 'reviewsTab' ? `${styles.active}` : ''}`}>
          Current Owners
        </li>
        <li>Reviews</li>
        <li>Images</li>
      </ul>
      <div className={styles.outlet}>
       {activeTab === 'recipesTab' ? <RecipesTab /> : <ReviewsTab />}
      </div>
    </div>
  );
}
