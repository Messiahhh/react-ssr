import { routes } from './router/config'
import configureStore from './redux/configureStore'
const koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const serve = require('koa-static')
const renderToHTML = require('./server')
const app = new koa()

const initialState = { // 初始state
    isFetching: false,
    lists: [],
}


router.get('/getData', (ctx) => {
    ctx.body = {
        lists: ['aaa', 'bbb', 'ccc'] 
    }
})


router.get('/', async (ctx, next) => { // 服务端渲染
    const store = configureStore(initialState) // 创建store
    const promiseArr = []
    routes.forEach(route => {
        promiseArr.push(route.loadData(store)) // 服务端发请求初始化store数据，返回值是promise
    })
    await Promise.all(promiseArr) // 需要等待数据加载
    const content = await renderToHTML('server', ctx.url, store) // 需要等待模板文件读取，并生成HTML
    ctx.body = content
})



router.get('/client', async (ctx) => { // 客户端渲染，作为对比
    const content = await renderToHTML('client')
    ctx.body = content
})



app.use(serve('dist'))
app.use(router.routes())
app.use(router.allowedMethods()) 

app.listen(3000, () => console.log('running'))