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
    console.log(dispatch(setFetching(true)));
    // dispatch(setFetching(true))
    return fetch('/getData')
        .then(res => res.json())
        .then(data => dispatch(setLists(data.lists)))
}

