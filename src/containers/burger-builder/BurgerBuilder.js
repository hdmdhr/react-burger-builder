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
        const tooLessIndividualIngredient = {...this.state.ingredients}
        for (let key in tooLessIndividualIngredient) {
            tooLessIndividualIngredient[key] = tooLessIndividualIngredient[key] <= 0
        }
        console.log(tooLessIndividualIngredient);

        const tooManyIndividualIngredient = {...this.state.ingredients}
        for (let key in tooManyIndividualIngredient) {
            tooManyIndividualIngredient[key] = tooManyIndividualIngredient[key] > 3 
        }
        
        const totalIngredientsNum = Object.entries(this.state.ingredients).reduce((prev, curr) => {return ['total', prev[1] + curr[1]]})[1]
        const tooManyTotalIngredients = totalIngredientsNum > 5

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disableLess={tooLessIndividualIngredient}
                    disableMore={tooManyIndividualIngredient}
                    disableEveryMore={tooManyTotalIngredients}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;