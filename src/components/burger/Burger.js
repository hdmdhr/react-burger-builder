import React from 'react';
import styles from './Burger.module.scss';
import BurgerIngredient from './ingredients/BurgerIngredient'

const Burger = props =>(
<div className={styles.Burger}>
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="meat" />
        <BurgerIngredient type="salad" />
        <BurgerIngredient type="bread-bottom" />
</div>
)

;

export default Burger;