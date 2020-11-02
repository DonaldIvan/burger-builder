import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

const button = ({ children, clicked, type }) => (
  <button className={classNames(styles.button, styles[type])} onClick={clicked}>
    {children}
  </button>
)

export default button
