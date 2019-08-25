import React from 'react'
import Logo from '../../logo/Logo';
import NavigationItems from '../navigation-items/NavigationItems';
import Backdrop from '../../ui/backdrop/Backdrop'
import Aux from '../../../hoc/auxilary/Auxiliary';

import styles from './SideDrawer.module.scss'

// Prop List: closed, isShown
const SideDrawer = props => {
    // decide .Open / .Close before return JSX
    let classes = [styles.SideDrawer]
    if (props.isShown) {
        classes.push(styles.Open)
    } else {
        classes.push(styles.Close)
    }

    return (
        <Aux>
            <Backdrop show={props.isShown} clicked={props.closed} />
            <div className={classes.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer