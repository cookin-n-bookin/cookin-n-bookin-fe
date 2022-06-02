import { useState } from 'react';
import styles from './StylesTab.css';
import RecipesTab from './RecipesTab';
import ReviewsTab from './ReviewsTab';
import ImagesTab from './ImagesTab';
import OwnersTab from './OwnersTab';
import TabContent from './TabContent';
import TabNavItem from './TabNavItem';

export default function DetailTabs() {
  const [activeTab, setActiveTab] = useState('recipesTab');

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
          <RecipesTab />
        </TabContent>
        <TabContent id="ownersTab" activeTab={activeTab}>
          <OwnersTab />
        </TabContent>
        <TabContent id="reviewsTab" activeTab={activeTab}>
          <ReviewsTab />
        </TabContent>
        <TabContent id="imagesTab" activeTab={activeTab}>
          <ImagesTab />
        </TabContent>
      </div>
    </div>
  );
}
