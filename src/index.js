import React from 'react';
import ReactDOM from 'react-dom';
import {Router}from'react-router'
import createBrowserHistory from"history/createBrowserHistory"
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from'redux-thunk'
import './index.css';
import {App} from './App';
//import {ConnectApp} from './containers'
import reducer from'./redux/reducer'

import {getFilms,login,auth,rent} from './redux/actions'

const logger = createLogger();
const store = createStore(reducer,applyMiddleware(thunk,logger))
const history=createBrowserHistory();


ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
