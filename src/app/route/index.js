
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
        },
        {
            path: 'member',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('container/children/member'));
                });
            }
        },
        {
            path: 'market',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('container/children/market'));
                });
            }
        },
        {
            path: 'ceo',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('container/children/ceo'));
                });
            }
        },
        {
            path: 'goods',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('container/children/goods'));
                });
            }
        }
    ]
};
