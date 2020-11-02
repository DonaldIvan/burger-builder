import React from 'react'
import styles from './Backdrop.module.scss'

const backDrop = ({ show, clicked }) => {
  return show ? <div className={styles.backdrop} onClick={clicked}></div> : null
}

export default backDrop
