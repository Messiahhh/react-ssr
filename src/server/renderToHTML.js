import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../components/app'

import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'

import bluebird from 'bluebird'
let fs = require('fs')
fs = bluebird.promisifyAll(fs) 



export default async function renderToHTML(type, url, store) {
    const template = await fs.readFileAsync((`./src/server/template/index.html`), 'utf8')
    const script = `
        <script src="/${type === 'server' ? 'client' : 'bundle'}.js"></script>
    `

    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles) => styles.forEach(style => {
        console.log(style);
        css.add(style._getCss())
    })

    if (type === 'client') { // 纯客户端渲染
        return template
        .replace('<!-- SCRIPT -->', script)
    } else {
        const content = renderToString(
            <Provider store={store}>
                <StyleContext.Provider value={{ insertCss }}> 
                    <StaticRouter location={url}>
                        <App />
                    </StaticRouter>
                </StyleContext.Provider>
            </Provider>
        )
        const state = `
            <script>
                window.__STATE__ = ${JSON.stringify(store.getState())}
            </script>
        `

        const style = `<style>${[...css].join('')}</style>`

        return template
        .replace(`<!-- CONTENT -->`, content)
        .replace(`<!-- STATE -->`, state)
        .replace(`<!-- STYLE -->`, style)
        .replace(`<!-- SCRIPT -->`, script)

        // return `<!doctype html>
        // <html>
        //   <head>
        //     <script src="/client.js" defer></script>
        //     <style>${[...css].join('')}</style>
        //   </head>
        //   <body>
        //     <div id="root">${content}</div>
        //   </body>
        // </html>`
    }
}



