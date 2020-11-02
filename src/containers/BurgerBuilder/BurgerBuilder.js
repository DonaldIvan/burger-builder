import React, { Component } from 'react'
import Auxillary from 'hoc/Auxillary'
import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'
import Modal from 'components/UI/Modal/Modal'
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary'
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
    purchaseable: false,
    purchasing: false,
  }

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((initial, current) => initial + current)
    this.setState({ purchaseable: sum })
  }

  onPurchase = () => {
    this.setState({ purchasing: true })
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
    this.updatePurchaseState(updatedIngredients)
  }

  onRemoveIngredient = (type) => {
    if (!type) return
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) return
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] - 1,
    }
    const priceAddition = Object.values(INGREDIENTS).find((obj) => obj.TYPE === type).PRICE
    this.setState({
      totalPrice: this.state.totalPrice - priceAddition,
      ingredients: updatedIngredients,
    })
    this.updatePurchaseState(updatedIngredients)
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Auxillary>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.onAddIngredient}
          ingredientRemove={this.onRemoveIngredient}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={!this.state.purchaseable}
          ordered={this.onPurchase}
        />
      </Auxillary>
    )
  }
}

export default BurgerBuilder
