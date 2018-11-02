import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./store/reducers/rootReducer";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import {getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore })))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();