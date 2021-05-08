var fs = require('fs')
const Koa = require('koa'); //引入koa框架
const Static = require('koa-static-cache'); //引入koa静态资源依赖
const Router = require('koa-router'); //引入koa路由
const Bodyparser = require('koa-body');//加载body解析依赖

const app = new Koa(); //类似于实例化

app.use(Bodyparser());//解析body,也就是post传参

//加载静态资源
app.use(Static('./static', {
    prefix: '/',
    gzip: true
}));

const router = new Router();//路由

app.use(router.routes());//挂载路由

router.get('/', async ctx => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('./static/index.html');
});

router.get('/buy',async ctx => {
    let money = ctx.query.money
    let user = ctx.request.header.cookie
    console.log(`${user}的账户支出了${money}`)
    ctx.body = {
        mesage:'ok'
    }
})

app.listen(8888, () => {});
