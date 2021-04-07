import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/app'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

module.exports = function ssr(initialState) {
    const store = configureStore(initialState)
    
    const content = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>window.__STATE__ = ${JSON.stringify(store.getState())}</script>
            <script src="/client.js"></script>
        </body>
        </html>
    `
}



