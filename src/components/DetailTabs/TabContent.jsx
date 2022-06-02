import React from 'react';
import styles from './StylesTab.css';

export default function TabContent({ id, activeTab, children }) {
  return activeTab === id ? (
    <div className={styles.tabContent}>{ children }</div>
  ) : null;
}
