import React from 'react'

import Auxillary from 'hoc/Auxillary'
import styles from './Layout.module.scss'

const layout = (props) => (
  <Auxillary>
    <div>Tool bar, side bar, backdrop</div>
    <main className={styles.content}>{props.children}</main>
  </Auxillary>
)

export default layout
