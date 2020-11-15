import React from 'react'

import styles from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
  <ul className={styles.navigationItems}>
    <NavigationItem link="/" type="active">
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
)

export default navigationItems
