import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, browserHistory} from 'react-router';


import initStore from './redux/init';

(async () => {
    const routes = require('./route');

    let createElement = (Component, props) => {
        return <Component {...props} />;
    };


    ReactDOM.render(
        <Router
            createElement={createElement}
            history={browserHistory}
            routes={routes}
            onUpdate={() => {
            }} />,
        document.getElementById('App'));
})();
