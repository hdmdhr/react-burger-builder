import React from 'react'
import Logo from '../../logo/Logo'
import NavigationItems from '../navigation-items/NavigationItems'
import DrawerToggle from '../side-drawer/drawer-toggle/DrawerToggle';

import styles from './Toolbar.module.scss'

// Prop List: drawerToggleClicked
const Toolbar = props => (
	<header className={styles.Toolbar}>
		<DrawerToggle clicked={props.drawerToggleClicked} />
		<div className={styles.Logo}>
			<Logo />
		</div>

		<nav className={styles.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
)

export default Toolbar