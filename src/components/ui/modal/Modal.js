import React from 'react'

import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../backdrop/Backdrop'
import styles from './Modal.module.scss'

/// Modal is a floating container for OrderSummary
const Modal = props => (
	<Aux>
		<Backdrop show={props.show} clicked={props.modalClosed} />
		<div 
		className={[styles.Modal, styles[props.show ? 'Show' : 'Hide']].join(' ')} 
		// EXL: styles.SomeClass = styles['SomeClass']
		// style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}
		>
			{props.children}
		</div>
	</Aux>
)

export default Modal