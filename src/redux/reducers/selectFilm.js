import {CHOOSE_FILM} from'../const'

export function selectFilm(state='',action){
    if(action.type === CHOOSE_FILM){
        return action.film||{}
    }
    return state;
}