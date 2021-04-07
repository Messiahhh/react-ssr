import React, {
    useEffect,
    useRef,
} from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

const initialState = {
    name: 'akara',
    age: 20,
}

const store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),
)