import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const ForbiddenRoute = ({...rest}) => {
    return (<Route {...rest} render={props => <Redirect to="/signin"/>}/>);
};

export default ForbiddenRoute;
