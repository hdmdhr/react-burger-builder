import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../navigation/tool-bar/Toolbar'
import styles from './Layout.module.scss';

const Layout = ( props ) => (
    <Aux>
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;