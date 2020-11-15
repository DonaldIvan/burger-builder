import React from 'react'

import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'
import stlyes from './SideDrawer.module.scss'

const sideDrawer = () => (
  <div className={stlyes.sideDrawer}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </div>
)

export default sideDrawer
