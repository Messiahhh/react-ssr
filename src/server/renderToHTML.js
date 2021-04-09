import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../components/app'

import { Provider } from 'react-redux'

import {
    StaticRouter,
} from 'react-router-dom'
import bluebird from 'bluebird'
let fs = require('fs')
fs = bluebird.promisifyAll(fs) 

module.exports = async function renderToHTML(type, url, store) {
    const template = await fs.readFileAsync(`${__dirname}/template/index.html`, 'utf8')
    const script = `
        <script src="/${type === 'server' ? 'client' : 'bundle'}.js"></script>
    `
    if (type === 'client') { // 纯客户端渲染
        return template
        .replace('<!-- SCRIPT -->', script)
    } else {
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </Provider>
        )
        const state = `
            <script>
                window.__STATE__ = ${JSON.stringify(store.getState())}
            </script>
        `
        return template
        .replace(`<!-- CONTENT -->`, content)
        .replace(`<!-- STATE -->`, state)
        .replace(`<!-- SCRIPT -->`, script)
    }
    

}



