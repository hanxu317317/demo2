/**
 * Created by listen1013 on 17/1/13.
 * 按照页面抽象的模块来分,如 layout listview detailview 这些同时只能存在一个,schema 可以存放各种对象的 schema ,是一个大的集合
 */

let actions = [].concat();
const _actions = {};
actions.forEach((action) => _actions[action] = action);
export default _actions;
