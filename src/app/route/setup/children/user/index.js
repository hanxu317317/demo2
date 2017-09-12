module.exports = {
    path: 'contacts/:objName',
    indexRoute: {
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('container/setup/user/user/listview/'));
            });
        }
    }
};
