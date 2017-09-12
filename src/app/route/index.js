
export default {
    component: require('container/app'),
    // indexRoute: {
    //    onEnter: () => {},
    //    component: require('../container/home/index')
    // },
    childRoutes: [
        require('./home')
    ]
};
