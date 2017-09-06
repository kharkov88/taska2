import {set_logged,setToken, fetching} from '../actions'

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