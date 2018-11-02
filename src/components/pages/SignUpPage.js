import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignUpForm from "../forms/SignUpForm";
import Header from "semantic-ui-react/dist/es/elements/Header/Header";

class SignUpPage extends Component {
    render() {
        return (
            <div className="container">
                <Header as='h1' textAlign='center'>Sign Up</Header>
                <SignUpForm submit={this.handleSubmit}/>
            </div>
        );
    }
}

SignUpPage.propTypes = {};

export default SignUpPage;
