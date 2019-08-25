import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../navigation/tool-bar/Toolbar'
import styles from './Layout.module.scss';
import SideDrawer from '../navigation/side-drawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState( prevState => {
            return { showSideDrawer: !prevState.showSideDrawer }
        } )
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
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