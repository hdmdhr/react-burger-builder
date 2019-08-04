import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/burger/Burger'
import BuildControls from '../../components/burger/build-controls/BuildControls'
import Modal from '../../components/ui/modal/Modal'
import OrderSummary from '../../components/burger/order-summary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.75,
    cheese: 0.4,
    meat: 1.0
}

class BurgerBuilder extends Component {
    // STATE
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    // METHODS
    updatePurchaseableState(ingredients) {
        const totalIngredientsNum = Object.entries(ingredients).reduce((prev, curr) => ['total', prev[1] + curr[1]], ['total', 0])[1]
        this.setState({purchaseable: totalIngredientsNum > 0})
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1
        const clonedIngredients = {...this.state.ingredients}
        clonedIngredients[type] = newCount
        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: clonedIngredients })
        this.updatePurchaseableState(clonedIngredients)
    }

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] <= 0) return
        const newCount = this.state.ingredients[type] - 1
        const clonedIngredients = {...this.state.ingredients}
        clonedIngredients[type] = newCount
        const priceSubtraction = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice - priceSubtraction
        this.setState({ totalPrice: newPrice, ingredients: clonedIngredients })
        this.updatePurchaseableState(clonedIngredients)
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    // RENDER JSX
    render () {
        const tooLessIndividualIngredient = {...this.state.ingredients}
        for (let key in tooLessIndividualIngredient) {
            tooLessIndividualIngredient[key] = tooLessIndividualIngredient[key] <= 0
        }
        console.table(tooLessIndividualIngredient);

        const tooManyIndividualIngredient = {...this.state.ingredients}
        for (let key in tooManyIndividualIngredient) {
            tooManyIndividualIngredient[key] = tooManyIndividualIngredient[key] > 5 
        }
        
        const totalIngredientsNum = Object.entries(this.state.ingredients).reduce((prev, curr) => {return ['total', prev[1] + curr[1]]})[1]
        const tooManyTotalIngredients = totalIngredientsNum > 5

        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disableLess={tooLessIndividualIngredient}
                    disableMore={tooManyIndividualIngredient}
                    disableEveryMore={tooManyTotalIngredients}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;