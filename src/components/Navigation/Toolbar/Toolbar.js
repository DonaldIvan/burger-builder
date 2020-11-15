import React from 'react'

import styles from './Toolbar.module.scss'
import Logo from 'components/Logo/Logo'

const toolbar = () => {
  return (
    <header className={styles.toolbar}>
      <div>Menu</div>
      <Logo />
      <nav className={styles.nav}></nav>
    </header>
  )
}

export default toolbar
