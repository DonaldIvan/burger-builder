import React from 'react'
import classNames from 'classnames'
import styles from './BuildControl.module.scss'
import PropTypes from 'prop-types'

const buildControl = ({ label, added }) => {
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button className={classNames(styles.action, styles.less)}>Less</button>
      <button className={classNames(styles.action, styles.more)} onClick={added}>
        More
      </button>
    </div>
  )
}

buildControl.propTypes = {}

export default buildControl
