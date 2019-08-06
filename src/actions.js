import {CHANGE_SEARCH_FIELD
    , FETCH_ROBOT_PENDING
    , FETCH_ROBOT_SUCCESS
    , FETCH_ROBOT_FAILED} from './constants'

export const setSearchField = (text) =>({
    type : CHANGE_SEARCH_FIELD,
    payload : text
})

export const requestRobots = () => (dispatch) => {
    dispatch({
        type:FETCH_ROBOT_PENDING
    })
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response=>Response.json())
        .then(data => dispatch({
            type: FETCH_ROBOT_SUCCESS,
            payload: data
        }))
        .catch(error => dispatch({
            type: FETCH_ROBOT_FAILED,
            payload: error
        }))
}