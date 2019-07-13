import React from 'react';
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.scss';

const Layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;