import React from 'react'

import styles from './Toolbar.module.scss'

const toolbar = () => {
  return (
    <header className={styles.toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <nav className={styles.nav}></nav>
    </header>
  )
}

export default toolbar
