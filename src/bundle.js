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



const initialState = { // 初始state
    isFetching: false,
    lists: [],
}


const store = configureStore(initialState)
console.log(store.getState());
// ReactDOM.render(
//     <Provider store={store}>
//         <Router>
//             <App />
//         </Router>
//     </Provider>,
//     document.querySelector('#root'),
// )