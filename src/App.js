import React, { Component } from 'react';
import {Route}from'react-router'
import {ConnectHeader,ConnectFilms,ConnectLogin,
        ConnectSelectFilm,ConnectAddFilm} from './containers'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectHeader/>
        <section className="App-content">
          <Route exact path='/films' component={ConnectFilms}/>
          <Route exact path='/rented' component={()=><p>'Upsss...'</p>}/>
          <Route exact path='/add-film' component={ConnectAddFilm}/>
          <Route exact path='/login' component={ConnectLogin}/>
          {/* <Route exact path='/film/*' component={ConnectSelectFilm}/> */}
          <ConnectSelectFilm/>
        </section>
      </div>
    );
  }
}

