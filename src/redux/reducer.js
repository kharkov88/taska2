import {combineReducers} from 'redux';
import {films,token,rentedFilm,selectFilm} from'./reducers'

export default combineReducers (
    {
        films,
        token,
        rentedFilm,
        selectFilm,
        logged_in,
        fetching
    }
)

function logged_in(state=false,action){
    if (action.type=='SET_LOGGED')return !state 
    return state
}
function fetching(state=false,action){
    if (action.type=='SEND_FETCH')return !state 
    return state
}