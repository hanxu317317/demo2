const router = require('koa-router')();

import apiConfig from '../config/apiconfig/config-now';

global.globalApiConfig = apiConfig;
// 每次重启给当前服务增加一个后缀 hash
global.fileHash = new Date().getTime();

function checkPermission() {
    var permissionHour = 240;
    // Fri Oct 13 2017 10:32:55 GMT+0800 (CST)
    var startTimeStamp = 1508121302056;

    var nowTime = new Date();

    var differ = nowTime.getTime() - startTimeStamp;
    
    var hours = differ / (60 * 60 * 1000);

    if (permissionHour > hours) {
        return true;
    } else {
        return false;
    }
}

router.get('/game', async (ctx) => {
    let permission = checkPermission();
    if (permission == false) {
        return ctx.body = '<span style="font-size:50px;">Hello World<br /> please get code permission before</span>';
    }
    await ctx.render('game', {
        title: 'game',
        filename: 'game'
    });
});


export default {
    init: (app) => {
        app
            .use(router.routes())
            .use(router.allowedMethods());

        app.use(async function (ctx) {
            try {
                let permission = checkPermission();
                if (permission == false) {
                    return ctx.body = '<span style="font-size:50px;">Hello World<br /> please get code permission before</span>';
                }
                return await ctx.render('app', {
                    layout: false
                });
            } catch (error) {
                if (error.redirect) {
                    return ctx.redirect(error.redirect);
                }
                throw error;
            }
        });
    }
};
