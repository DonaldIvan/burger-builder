import React from 'react'
import styles from './BuildControl.module.scss'
import PropTypes from 'prop-types'

const buildControl = ({ label }) => {
  console.log(styles)
  console.log('test')
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button className={styles.less}>Less</button>
      <button className={styles.more}>More</button>
    </div>
  )
}

buildControl.propTypes = {}

export default buildControl
