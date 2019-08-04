import React from 'react'
import styles from './BuildControls.module.scss'
import BuildControl from './build-control/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

/// Contains individual BuildControl, pass disable Less/More button into into BuildControl. Contains Order Now button, click on which will modally show OrderSummary.
// Prop List: price | ingredientAdded(_:) | ingredientRemoved(_:) | disableLess | disableMore | disableEveryMore | purchaseable | ordered
const BuildControls = props => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>

        {controls.map(ctrl => (
            <BuildControl key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disableLess={props.disableLess[ctrl.type]}
                disableMore={props.disableMore[ctrl.type]}
                disableEveryMore={props.disableEveryMore} />
        ))}

        <button 
        className={styles.OrderButton} 
        disabled={!props.purchaseable}
        onClick={props.ordered}>ORDER NOW!</button>
    </div>
)

export default BuildControls