import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.module.css'

class BurgerIngredient extends Component {
  render() {
    const getIngredient = (ingredientType) => {
      switch (ingredientType) {
        case 'breadBottom':
          return <div className={classes.breadBottom}></div>
        case 'breadTop':
          return (
            <div className={classes.breadTop}>
              <div className={classes.seeds1}></div>
              <div className={classes.seeds2}></div>
            </div>
          )
        case 'meat':
          return <div className={classes.meat}></div>
        case 'cheese':
          return <div className={classes.cheese}></div>
        case 'bacon':
          return <div className={classes.bacon}></div>
        case 'salad':
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
