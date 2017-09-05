import React, { Component } from 'react';
import {Link}from'react-router-dom'

export class Item extends Component {
  render() {
    let { onclick, logged_in, loggin,children} = this.props
    let activity = logged_in==false?'disabled':''
    return (
        <li className="header-menu-item" >
            <Link className={activity} to={children.trim().replace(' ','-')} onClick={onclick} >{children}</Link>
        </li>
    );
  }
}

