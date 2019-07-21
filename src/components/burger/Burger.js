import React from 'react';
import styles from './Burger.module.scss';
import BurgerIngredient from './ingredients/BurgerIngredient'

const Burger = props => {
        // MAP INGREDIENTS INTO COMPONENTS ARRAY (compo array need keys)
        const transformedIngredients = Object.keys(props.ingredients)
                .map( key => 
                        [...Array(props.ingredients[key])].map( (_, index) => {
                                return <BurgerIngredient key={key + index} type={key} />
                        })
                )

        return (
                <div className={styles.Burger}>
                        <BurgerIngredient type="bread-top" />
                        { transformedIngredients }
                        <BurgerIngredient type="bread-bottom" />
                </div>
        )

};

export default Burger;