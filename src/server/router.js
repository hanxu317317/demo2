const router = require('koa-router')();

import apiConfig from '../config/apiconfig/config-now';

global.globalApiConfig = apiConfig;
// 每次重启给当前服务增加一个后缀 hash
global.fileHash = new Date().getTime();

router.get('/game', async (ctx) => {
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
