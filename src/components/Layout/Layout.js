import React from 'react'

import Auxillary from 'hoc/Auxillary'
import styles from './Layout.module.scss'
import Toolbar from 'components/Navigation/Toolbar/Toolbar'

const layout = (props) => (
  <Auxillary>
    <Toolbar />
    <main className={styles.content}>{props.children}</main>
  </Auxillary>
)

export default layout
