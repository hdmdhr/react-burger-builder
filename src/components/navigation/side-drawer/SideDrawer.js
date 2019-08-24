import React from 'react'
import Logo from '../../logo/Logo';
import NavigationItems from '../navigation-items/NavigationItems';

import styles from './SideDrawer.module.scss'
const SideDrawer = props => {
    // do something before return JSX

    return (
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo />
            </div>

            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer