import React from 'react'
import Auxillary from 'hoc/Auxillary'
import Backdrop from 'components/UI/Backdrop/Backdrop'
import classNames from 'classnames'
import styles from './Modal.module.scss'

const modal = ({ children, show, modalClosed }) => (
  <Auxillary>
    <Backdrop show={show} clicked={modalClosed} />
    <div className={classNames(styles.modal, { [styles.show]: show, [styles.hide]: !show })}>{children}</div>
  </Auxillary>
)

export default modal
