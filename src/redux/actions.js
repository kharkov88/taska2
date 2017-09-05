import * as cnt from'./const'
export * from './actions/toRent'

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
export function login(user,pass){
    return dispatch=>{
        dispatch(fetching())
        fetch('https://film-api-go.herokuapp.com/login',{
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8'},
            body:JSON.stringify({
                login:user,
                password:pass
            })
        })
        .then(response=>{
            
            response.json()
                .then(data=>{
                    if(response.status==200){
                        dispatch(setToken(data.token));
                        dispatch(set_logged())
                        document.getElementsByClassName('success')[0].innerHTML =
                     `Success!`
                    }
                    else document.getElementsByClassName('success')[0].innerHTML =
                     `Server eror ${response.status}: ${data.error}`
                    dispatch(fetching())
                })
            })       
    }
}
export function auth(obj_auth){
    return dispatch=>{
        dispatch(fetching())
        fetch('https://film-api-go.herokuapp.com/auth',{
            method:'post',
             headers:{"Content-type": 'application/json; charset=utf-8'},
            body:JSON.stringify({
                    username: obj_auth.username,
                    password: obj_auth.password,
                    login: obj_auth.login,
                    age: obj_auth.age,
                    telephone: obj_auth.telephone
                })
        })
        .then(response=>{
            response.json().then(data=>{
                if(response.status!==200)
                document.getElementById('auth').innerHTML = data.error
                else document.getElementById('auth').innerHTML = "Succes! Try Login..."
                dispatch(fetching())
            })
        })       
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
export function addFilm(name,year,genres){
    return (dispatch,state)=>{
        dispatch(fetching())
        fetch('https://film-api-go.herokuapp.com/api/v1/film',
        {
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8',"Authorization": `Bearer ${state().token}`},
            body:JSON.stringify({
                name,
                year,
                genres
            })
        })
        .then(response=>{
            response.json().then(data=>{
                if(response.status==200)
                document.getElementsByClassName('add-result')[0].innerHTML = 'Success!'
                dispatch(fetching())
            })
        })
    }   
}