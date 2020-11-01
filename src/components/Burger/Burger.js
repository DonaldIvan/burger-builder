import React from 'react'
import classes from './Burger.module.scss'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map((propName) => {
    return [...Array(ingredients[propName])].map((_, i) => <BurgerIngredient key={propName + i} type={propName} />)
  })
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="breadTop" />
      {transformedIngredients}
      <BurgerIngredient type="breadBottom" />
    </div>
  )
}

export default burger
