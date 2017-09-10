import React, { Component } from 'react';
import cn from 'classnames'
import $ from 'jquery'
import './films.css'
import {Item} from './films-item'

export class Films extends Component {
  render() {
    let {logged_in,films,actions} = this.props
    let visible = films.length>0?'block':'none'
    return (
        <div className="films" style={{display:visible}}>
            <div className="row films-header">
                <div className="col-md-3">Name</div>
                <div className="col-md-2">Year</div>
                <div className="col-md-4">Gender</div>
                <div className="col-md-3">Added</div>
                <hr/>
            </div>
            {
                films.map((item,index)=>{
                    return <Item item={item} key={index} logged_in={logged_in} actions={actions}/>
                })
            }
            <div className="choosen1" onClick={()=>$(".choosen").toggleClass('open')}>
                <div className="movie">
                </div>
            </div>
        </div>
    );
  }
}


