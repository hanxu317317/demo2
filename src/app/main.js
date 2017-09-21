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

    let docElm = document.documentElement;
 
    if (docElm.requestFullscreen) {  
        docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {  
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {  
        docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
    }


    ReactDOM.render(
        <Router
            createElement={createElement}
            history={browserHistory}
            routes={routes}
            onUpdate={() => {
            }} />,
        document.getElementById('App'));
})();
