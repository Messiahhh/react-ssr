import axios from 'axios'
export const SET_FETCHING = 'SET_FETCHING'
export const SET_LISTS = 'SET_LISTS'


export const setFetching = (isFetching) => ({
    type: SET_FETCHING,
    payload: isFetching,
})

export const setLists = (lists) => ({
    type: SET_LISTS,
    payload: lists,
})


export const loadData = () => (dispatch) => {
    return axios.get('http://localhost:3000/getData')
        .then(res => {
            dispatch(setLists(res.data.lists))
        })
        .catch(err => console.log(err))
}

