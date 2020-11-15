import React from 'react'

import burgerLogo from 'assets/images/burger-logo.png'
import styles from './Logo.module.scss'

const logo = () => (
  <div className={styles.logo}>
    <img src={burgerLogo} alt="My Burger" className={styles.img} />
  </div>
)

export default logo
