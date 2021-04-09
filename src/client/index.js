import React from 'react'
import { hydrate } from 'react-dom'
import App from '../components/app'

import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'

import {
    BrowserRouter as Router,
} from 'react-router-dom'



const state = window.__STATE__

delete window.__STATE__

const store = configureStore(state)

hydrate(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.querySelector('#root')
)