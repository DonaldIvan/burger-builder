import React from 'react'

import styles from './Toolbar.module.scss'
import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = ({ drawerToggleHandler }) => (
  <header className={styles.toolbar}>
    <DrawerToggle clicked={drawerToggleHandler} />
    <div className={styles.logo}>
      <Logo />
    </div>
    <nav className={styles.nav}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
