import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../navigation/tool-bar/Toolbar'
import styles from './Layout.module.scss';
import SideDrawer from '../navigation/side-drawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer 
                isShown={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}
export default Layout;