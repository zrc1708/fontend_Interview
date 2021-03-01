const Koa = require('koa'); 
const Router = require('koa-router'); 
const Bodyparser = require('koa-bodyparser');

const app = new Koa(); 

app.use(Bodyparser());

const router = new Router();
app.use(router.routes());

router.get('/jsonp', async ctx => {
    const callback = ctx.query.callback

    // 测试数据
    const data = {
        username:'zhagnsan',
        userage:22
    }

    ctx.type='text'
    ctx.body = `${callback}(${JSON.stringify(data)})`
});

app.listen(8877, () => {});
