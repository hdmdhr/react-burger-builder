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
        const clonedIngredients = {...this.state.ingredients}
        clonedIngredients[type] = newCount
        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: clonedIngredients })
    }

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] <= 0) return
        const newCount = this.state.ingredients[type] - 1
        const clonedIngredients = {...this.state.ingredients}
        clonedIngredients[type] = newCount
        const priceSubtraction = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice - priceSubtraction
        this.setState({ totalPrice: newPrice, ingredients: clonedIngredients })
    }

    render () {
        const ingredientsLess0 = {...this.state.ingredients}
        for (let key in ingredientsLess0) {
            ingredientsLess0[key] = ingredientsLess0[key] <= 0
        }
        console.log(ingredientsLess0);
        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={ingredientsLess0} />
            </Aux>
        );
    }
}

export default BurgerBuilder;