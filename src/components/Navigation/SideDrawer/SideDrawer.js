import React from 'react'

import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'
import stlyes from './SideDrawer.module.scss'
import Auxillary from 'hoc/Auxillary'
import BackDrop from 'components/UI/Backdrop/Backdrop'
import classNames from 'classnames'

const sideDrawer = ({ closed, show }) => {
  return (
    <Auxillary>
      <BackDrop show={show} clicked={closed} />
      <div className={classNames(stlyes.sideDrawer, { [stlyes.open]: show, [stlyes.close]: !show })}>
        <div className={stlyes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxillary>
  )
}

export default sideDrawer
