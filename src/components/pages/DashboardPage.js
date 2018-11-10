import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header} from "semantic-ui-react";
import Table from "../vis/Table";

class DashboardPage extends Component {
    render() {
        return (
            <div>
                <Header as='h1' textAlign='center'>Dashboard Page</Header>
                <Table />
            </div>
        );
    }
}

DashboardPage.propTypes = {};

export default DashboardPage;
