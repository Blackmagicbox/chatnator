import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import State from './reducers/reducer'
import App from './containers/app';

const state = createStore(State, applyMiddleware(thunk));


ReactDom.render(
    <Provider store={state}>
        <App />
    </Provider>,
document.getElementById('app'));
