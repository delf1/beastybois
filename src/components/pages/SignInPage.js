import React, {Component} from 'react';
import SignInForm from '../forms/SignInForm';
import PropTypes from 'prop-types';
import {Header} from "semantic-ui-react";

class SignInPage extends Component {

    handleSubmit = () => this.props.history.push('/dashboard');

    render() {
        return (
            <div className="container">
                <Header as='h1' textAlign='center'>Sign In</Header>
                <SignInForm submit={this.handleSubmit}/>
            </div>
        );
    }
}

SignInPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default SignInPage;
