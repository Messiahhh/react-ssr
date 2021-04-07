const koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const serve = require('koa-static')
const ssr = require('./src/server')

const app = new koa()

const initialState = {
    name: 'akara',
    age: 20,
}

router.get('/', (ctx, next) => { // 服务端渲染
    const content = ssr(initialState)
    ctx.body = content
})

router.get('/client', (ctx) => { // 客户端渲染，作为对比
    ctx.body = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
        </head>
        <body>
            <div id="root">hello world</div>
            <script src="/bundle.js"></script>
        </body>
    </html>
    `
})



app.use(serve('dist'))
app.use(router.routes())
app.use(router.allowedMethods()) 

app.listen(3000, () => console.log('running'))