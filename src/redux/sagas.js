import {put,takeEvery,call,all} from 'redux-saga/effects'
import {Api} from'./api'

export function* fetchFilms(){
    try{
        yield put({type:'SEND_FETCH'})
        const data = yield call(Api.fetchFilms)  
        yield put({type:'UPDATE_FILMS',result:data.result})
        yield put({type:'SEND_FETCH'})
    }
    catch(e){
        console.log('error',e)
    }
}

export function* watchFetchFilms(){
    yield takeEvery('FETCH_FILMS_REQUEST',fetchFilms)
}

export function* rootSaga(){
    yield all([
        watchFetchFilms()
    ])
}

