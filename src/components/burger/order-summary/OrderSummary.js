import React from 'react'

import Aux from '../../../hoc/Auxiliary'
import Button from '../../ui/button/Button'

const OrderSummary = props => {
	const ingredientSummaryList = Object.entries(props.ingredients).map(arr => 
		<li key={arr[0]}>
			<span style={{textTransform: 'capitalize'}}>{arr[0]}</span>: {arr[1]}
		</li>
	)

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A burger with following ingredients: </p>
			<ul>
				{ingredientSummaryList}
			</ul>
			<p>Continue to checkout?</p>
			<Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
			<Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
		</Aux>
	)
}

export default OrderSummary