import React from 'react'
import Logo from '../../logo/Logo'
import styles from './Toolbar.module.scss'

const Toolbar = props => (
	<header className={styles.Toolbar}>
		<div>MENU</div>
		<Logo />
		<nav>
			<ul>
				...
			</ul>
		</nav>
	</header>
)

export default Toolbar