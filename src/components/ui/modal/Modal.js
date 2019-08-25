import React, { Component } from 'react'

import Aux from '../../../hoc/auxilary/Auxiliary'
import Backdrop from '../backdrop/Backdrop'
import styles from './Modal.module.scss'

/// Modal is a floating container for OrderSummary
// Prop List: show, modalClosed
class Modal extends Component {

	// Lifecycle
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show
	}

	componentWillUpdate() {
		console.log('Modal will update.');		
	}
	
	render() {
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<div 
				className={[styles.Modal, styles[this.props.show ? 'Show' : 'Hide']].join(' ')} 
				// EXL: styles.SomeClass = styles['SomeClass']
				// style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}
				>
					{this.props.children}
				</div>
			</Aux>
		)
	}
}

export default Modal