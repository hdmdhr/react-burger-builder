import React, {Component} from 'react'
import Modal from '../../components/ui/modal/Modal';
import Aux from '../auxilary/Auxiliary';

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {  // anonymous class

        // State
        state = {
            error: null
        }

        // Lifecycles
        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })

            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
                
            })
        }

        // Handlers
        errorConfirmHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
              <Aux>
                <Modal
                  show={this.state.error}
                  modalClosed={this.errorConfirmHandler}
                >
                  {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
              </Aux>
            );
        }
    }
}

export default WithErrorHandler