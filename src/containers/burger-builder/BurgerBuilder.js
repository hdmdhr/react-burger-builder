import React, { Component } from "react";

import Aux from "../../hoc/auxilary/Auxiliary";
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/burger/build-controls/BuildControls";
import Modal from "../../components/ui/modal/Modal";
import OrderSummary from "../../components/burger/order-summary/OrderSummary";
import axiosInstance from "../../axios-orders";
import Spinner from "../../components/ui/spinner/Spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.75,
  cheese: 0.4,
  meat: 1.0
};

/// Stateful component contains Burger, BurgerControls, Modal<OrderSummary>
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
    purchasing: false,
    loading: false
  };

  // METHODS
  updatePurchaseableState(ingredients) {
    const totalIngredientsNum = Object.entries(ingredients).reduce(
      (prev, curr) => ["total", prev[1] + curr[1]],
      ["total", 0]
    )[1];
    this.setState({ purchaseable: totalIngredientsNum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const clonedIngredients = { ...this.state.ingredients };
    clonedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: clonedIngredients });
    this.updatePurchaseableState(clonedIngredients);
  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] <= 0) return;
    const newCount = this.state.ingredients[type] - 1;
    const clonedIngredients = { ...this.state.ingredients };
    clonedIngredients[type] = newCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceSubtraction;
    this.setState({ totalPrice: newPrice, ingredients: clonedIngredients });
    this.updatePurchaseableState(clonedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert('Continue to pay!')
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice, // in production, should calculate price on server side
      customer: {
        name: "Daniel Hu",
        address: "123 st 321 ave",
        zip: "12345",
        email: "1@2.com"
      },
      deliveryMethod: "fastest"
    };
    axiosInstance
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  // RENDER JSX
  render() {
    const tooLessIndividualIngredient = { ...this.state.ingredients };
    for (let key in tooLessIndividualIngredient) {
      tooLessIndividualIngredient[key] = tooLessIndividualIngredient[key] <= 0;
    }
    // console.table(tooLessIndividualIngredient);

    const tooManyIndividualIngredient = { ...this.state.ingredients };
    for (let key in tooManyIndividualIngredient) {
      tooManyIndividualIngredient[key] = tooManyIndividualIngredient[key] > 5;
    }

    const totalIngredientsNum = Object.entries(this.state.ingredients).reduce(
      (prev, curr) => {
        return ["total", prev[1] + curr[1]];
      }
    )[1];
    const tooManyTotalIngredients = totalIngredientsNum > 5;

    // Spinner
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disableLess={tooLessIndividualIngredient}
          disableMore={tooManyIndividualIngredient}
          disableEveryMore={tooManyTotalIngredients}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
