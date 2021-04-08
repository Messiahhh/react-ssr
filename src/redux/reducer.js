import { 
    SET_FETCHING,
    SET_LISTS,
} from './action.js'

const initialState = {
    isFetching: false,
    lists: [],
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_FETCHING:
            return Object.assign({}, state, {
                isFetching: action.payload
            })
        case SET_LISTS:
            return Object.assign({}, state, {
                isFetching: false,
                lists: action.payload,
            })
        default:
            return state
    }
}

export default reducer