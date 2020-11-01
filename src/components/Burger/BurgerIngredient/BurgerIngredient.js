import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.module.css'
import { INGREDIENTS } from 'constants/ingredients'

class BurgerIngredient extends Component {
  render() {
    const getIngredient = (ingredientType) => {
      switch (ingredientType) {
        case INGREDIENTS.BREAD_BOTTOM:
          return <div className={classes.breadBottom}></div>
        case INGREDIENTS.BREAD_TOP:
          return (
            <div className={classes.breadTop}>
              <div className={classes.seeds1}></div>
              <div className={classes.seeds2}></div>
            </div>
          )
        case INGREDIENTS.MEAT:
          return <div className={classes.meat}></div>
        case INGREDIENTS.CHEESE:
          return <div className={classes.cheese}></div>
        case INGREDIENTS.BACON:
          return <div className={classes.bacon}></div>
        case INGREDIENTS.SALAD:
          return <div className={classes.salad}></div>
        default:
          return null
      }
    }
    return getIngredient(this.props.type)
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredient
