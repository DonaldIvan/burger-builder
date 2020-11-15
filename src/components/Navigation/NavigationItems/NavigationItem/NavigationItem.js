import React from 'react'

import styles from './NavigationItem.module.scss'
import classNames from 'classnames'

const navigationItem = ({ type, link, children }) => (
  <li className={styles.navigationItem}>
    <a className={classNames(styles.link, styles[type])} href={link}>
      {children}
    </a>
  </li>
)

export default navigationItem
