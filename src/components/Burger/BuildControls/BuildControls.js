import React from 'react'
import PropTypes from 'prop-types'
import { INGREDIENTS } from 'constants/ingredients'

import BuildControl from './BuildControl/BuildControl'

import styles from './BuildControls.module.scss'

const controls = Object.values(INGREDIENTS).filter(
  (obj) => ![INGREDIENTS.BREAD_BOTTOM.TYPE, INGREDIENTS.BREAD_TOP.TYPE].includes(obj.TYPE),
)

const buildControls = (props) => {
  return (
    <div className={styles.buildControls}>
      {controls.map((obj) => (
        <BuildControl key={obj.LABEL} label={obj.LABEL} type={obj.TYPE} />
      ))}
    </div>
  )
}

buildControls.propTypes = {}

export default buildControls
