import React from 'react'
import styles from './BuildControl.module.scss'

const BuildControl = props => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{ props.label }</div>

        <button className={styles.Less} 
        onClick={props.removed} 
        disabled={props.disableLess}>Less</button>

        <button className={styles.More} 
        onClick={props.added} 
        disabled={props.disableEveryMore || props.disableMore}>More</button>
    </div>
)

export default BuildControl