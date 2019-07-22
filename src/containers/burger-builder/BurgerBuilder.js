import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/burger/Burger'
import BuildControls from '../../components/burger/build-controls/BuildControls'

class BurgerBuilder extends Component {
    // STATE
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
        // TODO: add price, etc.
    }


    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;