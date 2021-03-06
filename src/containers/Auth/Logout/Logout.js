import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as authActions from '../../../store/actions/auth';

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout(this.props.history);
    }
    
    render() {
        return (
            <Redirect to="/"/>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authActions.logout())
    }
};

export default connect(null, mapDispatchToProps)(Logout);