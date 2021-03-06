import React from 'react'
import classNames from 'classnames'
import styles from './BuildControl.module.scss'

const buildControl = ({ label, added, remove, disabled }) => {
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button className={classNames(styles.action, styles.less)} onClick={remove} disabled={disabled}>
        Less
      </button>
      <button className={classNames(styles.action, styles.more)} onClick={added}>
        More
      </button>
    </div>
  )
}

buildControl.propTypes = {}

export default buildControl
