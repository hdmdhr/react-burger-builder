import React, { Component } from 'react';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

// Prop List: type
class BurgerIngredient extends Component {
    render() {    

        let ingredient = null;

        switch (this.props.type) {
            case 'bread-bottom':
                ingredient = <div className={styles.BreadBottom}></div>
                break;
            case 'bread-top':
                ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1} />
                    <div className={styles.Seeds2} />
                </div>)
                break;
            case 'meat':
                    ingredient = <div className={styles.Meat}></div>
                    break;
            case 'cheese':
                    ingredient = <div className={styles.Cheese}></div>
                    break;
            case 'bacon':
                    ingredient = <div className={styles.Bacon}></div>
                    break;
            case 'salad':
                    ingredient = <div className={styles.Salad}></div>
                    break; 
            default:
                break;
        }

        return ingredient;

    }
};

// EXL: use prop-types to add type validation
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;