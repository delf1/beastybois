import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header} from "semantic-ui-react";

class DashboardPage extends Component {
    render() {
        return (
            <div>
                <Header as='h1' textAlign='center'>Dashboard Page</Header>
            </div>
        );
    }
}

DashboardPage.propTypes = {};

export default DashboardPage;
