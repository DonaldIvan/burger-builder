import React from 'react'

import styles from './DrawerToggle.module.scss'

const drawerToggle = ({ clicked }) => (
  <div onClick={clicked} className={styles.drawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
export default drawerToggle
