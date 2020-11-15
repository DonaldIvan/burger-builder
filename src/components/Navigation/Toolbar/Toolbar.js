import React from 'react'

import styles from './Toolbar.module.scss'
import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'

const toolbar = () => (
  <header className={styles.toolbar}>
    <div>Menu</div>
    <div className={styles.logo}>
      <Logo />
    </div>
    <nav className={styles.nav}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
