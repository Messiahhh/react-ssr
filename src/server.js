import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/app'

module.exports = function ssr() {
    const content = renderToString(<App />)
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
            <script src="/client.js"></script>
        </body>
        </html>
    `
}



