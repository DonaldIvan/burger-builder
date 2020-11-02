import React from 'react'
import classNames from 'classnames'
import styles from './Modal.module.scss'

const modal = ({ children, show }) => {
  return <div className={classNames(styles.modal, { [styles.show]: show, [styles.hide]: !show })}>{children}</div>
}

export default modal
