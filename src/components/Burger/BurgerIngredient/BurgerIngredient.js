import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerIngredient.module.css'
import { INGREDIENTS } from 'constants/ingredients'

class BurgerIngredient extends Component {
  render() {
    const getIngredient = (ingredientType) => {
      switch (ingredientType) {
        case INGREDIENTS.BREAD_BOTTOM:
          return <div className={styles.breadBottom}></div>
        case INGREDIENTS.BREAD_TOP:
          return (
            <div className={styles.breadTop}>
              <div className={styles.seeds1}></div>
              <div className={styles.seeds2}></div>
            </div>
          )
        case INGREDIENTS.MEAT:
          return <div className={styles.meat}></div>
        case INGREDIENTS.CHEESE:
          return <div className={styles.cheese}></div>
        case INGREDIENTS.BACON:
          return <div className={styles.bacon}></div>
        case INGREDIENTS.SALAD:
          return <div className={styles.salad}></div>
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
