import React from 'react'
import Auxillary from 'hoc/Auxillary'
import Button from 'components/UI/Button/Button'
import styles from './OrderSummary.modules.scss'

const orderSummary = ({ ingredients, purchaseCanceled, purchaseContinue, price }) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => (
    <li key={igKey}>
      <span className={styles.capitalize}>{igKey}</span> : {ingredients[igKey]}
    </li>
  ))
  return (
    <Auxillary className={styles.orderSummary}>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={purchaseCanceled} type="danger">
        CANCEL
      </Button>
      <Button clicked={purchaseContinue} type="success">
        CONTINUE
      </Button>
    </Auxillary>
  )
}

export default orderSummary
