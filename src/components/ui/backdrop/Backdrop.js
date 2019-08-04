import React from 'react'

import styles from './Backdrop.module.scss'

/// Backdrop is a 50% alpha black veil behind the Modal container
const Backdrop = props => (
	props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
)

export default Backdrop