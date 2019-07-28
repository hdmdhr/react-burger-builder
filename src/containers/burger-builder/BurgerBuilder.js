import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/burger/Burger'
import BuildControls from '../../components/burger/build-controls/BuildControls'

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
        totalPrice: 4
    }

    // METHODS
    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount
        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    removeIngredientHandler = type => {

    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;