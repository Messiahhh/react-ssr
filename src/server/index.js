import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../components/app'

import { Provider } from 'react-redux'

import {
    StaticRouter,
} from 'react-router-dom'
import bluebird from 'bluebird'
const fs = bluebird.promisifyAll(require('fs'))

module.exports = async function ssr(url, store) {
    const template = await fs.readFileAsync(`${__dirname}/template/index.html`, 'utf8')

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
}



