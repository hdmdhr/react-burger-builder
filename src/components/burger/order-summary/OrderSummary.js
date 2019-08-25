import React, { Component } from 'react'

import Aux from '../../../hoc/auxilary/Auxiliary'
import Button from '../../ui/button/Button'

/// Shows ingredients list, total price, cancel & continue buttons
// Prop List: ingredients | price | purchaseCanceled | purchaseContinued
class OrderSummary extends Component {

	// Lifecycle
	componentWillUpdate() {
		console.log('OrderSummary will update.');		
	}


	render() {

		const ingredientSummaryList = Object.entries(this.props.ingredients).map(arr => 
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
				<p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
				<p>Continue to checkout?</p>
				<Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
				<Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
			</Aux>
		)
	}



}

export default OrderSummary