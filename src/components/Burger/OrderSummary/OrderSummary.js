import React from 'react'
import Auxillary from 'hoc/Auxillary'
import styles from './OrderSummary.modules.scss'

const orderSummary = ({ ingredients }) => {
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
      <p>Continue to Checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Auxillary>
  )
}

export default orderSummary
