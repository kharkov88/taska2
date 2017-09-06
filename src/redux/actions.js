import * as cnt from'./const'
export * from './actions/toRent'
export * from './actions/login'
export * from './actions/addfilm'
export * from './actions/auth'

export function update(data){
    return{
        type:cnt.UPDATE_FILMS,
        result:data.result
    }
}
export function setToken(token){
    return{
        type:cnt.SET_TOKEN,
        token
    }
}
export function getRentedFilm(data){
    return{
        type:cnt.GET_RENTED_FILM,
        data
    }
}
export function chooseFilm(film){
    return{
        type:cnt.CHOOSE_FILM,
        film
    }
}
export function set_logged(){
    return{
        type:cnt.SET_LOGGED
    }
}
export function fetching(){
    return{
        type:cnt.SEND_FETCH
    }
}

export function getFilms(){
    return (dispatch)=>{
        dispatch(fetching())
        fetch('https://film-api-go.herokuapp.com/api/v1/film')
        .then(response=>{
            response.json().then(data=>{
                console.log(data)
                dispatch(update(data))
                dispatch(fetching())
            })
        })
    }
}
