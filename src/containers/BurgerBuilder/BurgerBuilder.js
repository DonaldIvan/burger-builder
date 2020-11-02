import React, { Component } from 'react'
import Auxillary from 'hoc/Auxillary'
import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'
import { INGREDIENTS } from 'constants/ingredients'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  }

  onAddIngredient = (type) => {
    if (!type) return
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] + 1,
    }
    const priceAddition = Object.values(INGREDIENTS).find((obj) => obj.TYPE === type).PRICE
    this.setState({
      totalPrice: this.state.totalPrice + priceAddition,
      ingredients: updatedIngredients,
    })
  }

  onRemoveIngredient = (type) => {}

  render() {
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.onAddIngredient} />
      </Auxillary>
    )
  }
}

export default BurgerBuilder
