import React from 'react'
import styles from './StylesTab.css' 

export default function DetailTabs() {
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabNav}>
        <li>Recipes</li>
        <li>Current Owners</li>
        <li>Reviews</li>
        <li>Images</li>
      </ul>
      <div className={styles.outlet}>

      </div>
    </div>
  )
}
