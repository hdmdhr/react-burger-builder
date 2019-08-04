import React from 'react'

import styles from './Toolbar.module.scss'

const Toolbar = props => (
	<header className={styles.Toolbar}>
		<div>MENU</div>
		<div>LOGO</div>
		<nav>
			<ul>
				...
			</ul>
		</nav>
	</header>
)

export default Toolbar