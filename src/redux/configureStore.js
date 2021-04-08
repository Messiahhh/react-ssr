import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import ReduxThunk from 'redux-thunk'
export default function configureStore(state) {
    return createStore(
        reducer,
        state,
        applyMiddleware(ReduxThunk)
    )
}