import React from 'react'

import Auxillary from 'hoc/Auxillary'
import classes from './Layout.module.scss'

const layout = (props) => (
  <Auxillary>
    <div>Tool bar, side bar, backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Auxillary>
)

export default layout
