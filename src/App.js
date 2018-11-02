import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import SignUpPage from "./components/pages/SignUpPage";
import DashboardPage from "./components/pages/DashboardPage";
import Navbar from "./components/layout/Navbar";
import PropTypes from 'prop-types';
import ForbiddenRoute from "./components/routes/ForbiddenRoute";
import SignInPage from "./components/pages/SignInPage";


class App extends Component {

    render() {

        return (
            <div className="ui container">

                <Navbar/>

                <Switch>
                    <Route exact path='/signin' component={SignInPage}/>
                    <Route exact path='/signup' component={SignUpPage}/>
                    <Route exact path='/dashboard' component={DashboardPage}/>
                    <ForbiddenRoute path='/'/>
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    location: PropTypes.object.isRequired,
};

export default withRouter(App);