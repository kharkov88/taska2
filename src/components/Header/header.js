import React, { Component } from 'react';
import './header.css';
import {Item} from'./header_menu'

export class Header extends Component {
  render() {
    let {logged_in,actions,fetching} = this.props
    let visible = fetching?'block':'none'
    return (
        <div className="App-header">
          <div className="loader" id="loader" style={{display:visible}}>
            <img src="img/loader.gif" />
          </div>
          <h2>Welcome to base of good films!</h2>
          <h4>* For renting and adding movies, you need to log in</h4>
          <ul className="header-menu">
            <Item onclick={actions.getFilms2} logged_in={true}>films</Item>
            <Item onclick={actions.getRents} logged_in={logged_in}>rented</Item>
            <Item logged_in={logged_in}>add film</Item>
            <Item logged_in={true}>login</Item>
          </ul>
        </div>
    );
  }
}

