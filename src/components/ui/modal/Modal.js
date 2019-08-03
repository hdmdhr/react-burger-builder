import React from 'react'
import styles from './Modal.module.scss'

const Modal = props => (
	<div className={styles.Modal}>
		{props.children}
	</div>
)

export default Modal