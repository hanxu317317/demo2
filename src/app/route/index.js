
export default {
    component: require('container/app'),
    // indexRoute: {
    //    onEnter: () => {},
    //    component: require('../container/home/index')
    // },
    childRoutes: [
        require('./home'),
        {
            path: 'intro',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('container/children/intro'));
                });
            }
        },
        {
            path: 'culture',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('container/children/culture'));
                });
            }
        }
    ]
};
