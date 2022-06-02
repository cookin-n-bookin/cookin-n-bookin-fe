import { useState } from 'react';
import styles from './StylesTab.css';
import TabContent from './TabContent';
import TabNavItem from './TabNavItem';

export default function DetailTabs() {
  const [activeTab, setActiveTab] = useState('recipesTab');

  // const handleRecipesTab = () => {
  //   setActiveTab('recipesTab');
  // };

  // const handleReviewsTab = () => {
  //   setActiveTab('reviewsTab');
  // };

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabNav}>
        <TabNavItem
          title="Recipes"
          id="recipesTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Current Owners"
          id="ownersTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Review"
          id="reviewsTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Images"
          id="imagesTab"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className={styles.outlet}>
        <TabContent id="recipesTab" activeTab={activeTab}>
          <p>working!</p>
        </TabContent>
        <TabContent id="ownersTab" activeTab={activeTab}>
          <p>working still !</p>
        </TabContent>
        <TabContent id="reviewsTab" activeTab={activeTab}>
          <p>yup!</p>
        </TabContent>
        <TabContent id="imagesTab" activeTab={activeTab}>
          <p>wow!</p>
        </TabContent>
      </div>
    </div>
  );
}
