import React from 'react'
import { hydrate } from 'react-dom'
import App from '../components/app'

import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'

import {
    BrowserRouter as Router,
} from 'react-router-dom'

import StyleContext from 'isomorphic-style-loader/StyleContext'




const insertCss = (...styles) => {
    // 感觉没必要
    // const removeCss = styles.map(style => style._insertCss())
    // return () => removeCss.forEach(dispose => dispose())
}



const state = window.__STATE__

delete window.__STATE__

const store = configureStore(state)

hydrate(
    <Provider store={store}>
        <StyleContext.Provider value={{ insertCss }}>
            <Router>
                <App />
            </Router>
        </StyleContext.Provider>
    </Provider>, 
    document.querySelector('#root')
)