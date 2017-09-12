
import I from 'immutable';
import reducers from './reducers';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';

import asyncAction from './middleware/async-action';

export default function create(initState = I.Map()) {
    const middlware = [asyncAction, routerMiddleware(browserHistory)];


    return createStore(reducers, initState, applyMiddleware(...middlware));
}
