import React, {Component} from 'react';
import Layout from './hoc/layout/Layout';
import BurgerBuilder from './containers/burger-builder/BurgerBuilder'


class App extends Component {
  // @TEST: see if axios.interceptor get correctly removed.
  state = { show: true }

  componentDidMount() {
    setTimeout(() => {
      this.setState({show: false})
    }, 5000);
  }

  render() {
    return (
      <div>
        <Layout>
          { this.state.show ? <BurgerBuilder /> : null }
        </Layout>
      </div>
    );
  }

}

export default App;
