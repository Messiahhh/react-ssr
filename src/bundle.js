import React, {
    useEffect,
    useRef,
} from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import {
    BrowserRouter as Router,
} from 'react-router-dom'





const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#root'),
)