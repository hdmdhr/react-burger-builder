import React from 'react'
import styles from './NavigationItems.module.scss'
import NavigationItem from './navigation-item/NavigationItem'

const NavigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>
            BurgerBuilder
        </NavigationItem>
        <NavigationItem link="/">
            Checkout
        </NavigationItem>
    </ul>
)

export default NavigationItems