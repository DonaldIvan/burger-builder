import React from 'react'
import { INGREDIENTS } from 'constants/ingredients'

import BuildControl from './BuildControl/BuildControl'

import styles from './BuildControls.module.scss'

const controls = Object.values(INGREDIENTS).filter(
  (obj) => ![INGREDIENTS.BREAD_BOTTOM.TYPE, INGREDIENTS.BREAD_TOP.TYPE].includes(obj.TYPE),
)

const buildControls = ({ ingredientAdded, ingredientRemove, disabled, price, purchaseable, ordered }) => {
  return (
    <div className={styles.buildControls}>
      <p>
        Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((obj) => (
        <BuildControl
          key={obj.LABEL}
          label={obj.LABEL}
          added={() => ingredientAdded(obj.TYPE)}
          remove={() => ingredientRemove(obj.TYPE)}
          disabled={disabled[obj.TYPE]}
        />
      ))}
      <button className={styles.order} disabled={purchaseable} onClick={ordered}>
        ORDER NOW!
      </button>
    </div>
  )
}

buildControls.propTypes = {}

export default buildControls
