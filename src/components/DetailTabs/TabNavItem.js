import React from 'react';
import styles from './StylesTab.css';

export default function TabNavItem({ id, title, activeTab, setActiveTab }) {

    const handleClick = () => {
        setActiveTab(id);
    };

  return (
   <li
    onClick={handleClick}
    className={`${activeTab === id ? `${styles.active}` : ''}`}
   >
       { title }
   </li>
  )
}
