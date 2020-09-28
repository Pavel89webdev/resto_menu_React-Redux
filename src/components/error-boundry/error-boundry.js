import React, {Component} from 'react';
import { connect } from 'react-redux';
import Error from '../error';
import { serverError } from '../../actions';

class ErrorBoundry extends Component {

    componentDidCatch(){
        console.log('error is detected');
        this.props.serverError();
    }

    render() {
        if(this.props.error){
            return <Error/>
        }

        return this.props.children;
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.serverError
    }       
}

const mapReduseToProps = {
    serverError
}
    

export default connect(mapStateToProps, mapReduseToProps)(ErrorBoundry)