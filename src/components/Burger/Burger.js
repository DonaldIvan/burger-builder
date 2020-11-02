import React from 'react'
import styles from './Burger.module.scss'
import { INGREDIENTS } from 'constants/ingredients'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map((propName) =>
      [...Array(ingredients[propName])].map((_, i) => <BurgerIngredient key={propName + i} type={propName} />),
    )
    .reduce((initial, current) => initial.concat(current), [])
  return (
    <div className={styles.burger}>
      <BurgerIngredient type={INGREDIENTS.BREAD_TOP.TYPE} />
      {(transformedIngredients.length && transformedIngredients) || <p>Please start adding ingredients</p>}
      <BurgerIngredient type={INGREDIENTS.BREAD_BOTTOM.TYPE} />
    </div>
  )
}

export default burger
