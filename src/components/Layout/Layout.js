import React from 'react'

import Auxillary from 'hoc/Auxillary'
import styles from './Layout.module.scss'
import Toolbar from 'components/Navigation/Toolbar/Toolbar'
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
  <Auxillary>
    <Toolbar />
    <SideDrawer />
    <main className={styles.content}>{props.children}</main>
  </Auxillary>
)

export default layout
