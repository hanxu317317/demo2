/**
 * Created by lvhaibin on 2017/8/30.
 */
export default {
    path: '/contacts/:objName',
    indexRoute: {
        onEnter: () => {},
        component: require('container/contacts/listview')
    }
};
