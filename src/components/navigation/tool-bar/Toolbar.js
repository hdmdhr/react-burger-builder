import React from 'react'
import Logo from '../../logo/Logo'
import NavigationItems from '../navigation-items/NavigationItems'
import styles from './Toolbar.module.scss'

// prop list: 
const Toolbar = props => (
	<header className={styles.Toolbar}>
		<div>MENU</div>
		<div className={styles.Logo}>
			<Logo />
		</div>

		<nav className={styles.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
)

export default Toolbar