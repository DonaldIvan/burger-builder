import React from 'react'
import classes from './Burger.module.scss'
import { INGREDIENTS } from 'constants/ingredients'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map((propName) => {
    return [...Array(ingredients[propName])].map((_, i) => <BurgerIngredient key={propName + i} type={propName} />)
  })
  return (
    <div className={classes.burger}>
      <BurgerIngredient type={INGREDIENTS.BREAD_TOP} />
      {transformedIngredients}
      <BurgerIngredient type={INGREDIENTS.BREAD_BOTTOM} />
    </div>
  )
}

export default burger
