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
        componentWillMount() {
          // create a class property on the fly to store interceptor reference 
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
                
            })
        }

        componentWillUnmount() {
          console.log('@DEBUG: Will Unmount', this.reqInterceptor, this.resInterceptor);
          
          axios.interceptors.request.eject(this.reqInterceptor)
          axios.interceptors.request.eject(this.resInterceptor)
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