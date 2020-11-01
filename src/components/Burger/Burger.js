import React from 'react'
import classes from './Burger.module.scss'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = () => {
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="breadTop" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="breadBottom" />
    </div>
  )
}

export default burger
