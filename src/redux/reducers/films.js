
export function films(state=[],action){
    if(action.type === 'UPDATE_FILMS'){
        return action.result||[]
    }
    return state;
}