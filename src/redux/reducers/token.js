import {SET_TOKEN} from'../const'

export function token(state='',action){
    if(action.type === SET_TOKEN){
        return action.token||'token'
    }
    return state;
}