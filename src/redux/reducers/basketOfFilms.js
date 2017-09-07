export function basketOfFilms(state=[],action){
    switch(action.type){
        case 'BUY_FILM':
        return [
            ...state,
            {
                count:1,
                film:action.film
            }
        ]||[]
        case 'INCREMENT':
        return state.map(item=>{
            if(item.film.id===action.id) ++item.count
            return  item
        })
        case 'DECREMENT':
        return state.map(item=>{
            if(item.film.id===action.id&&item.count!==1) --item.count
            return  item
        })
        default: return state;
    }
}