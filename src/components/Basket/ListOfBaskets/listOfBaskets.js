import React, { Component } from 'react';
import $ from 'jquery'
import './listOfBaskets.css'

import {Item} from './Item'
export class ListOfBaskets extends Component {
    constructor(props){
        super(props)
        this.state = {
            total:0
        }
    }
  render() {
      let total=0;
    let {films,actions} = this.props
    return (
        <div className="app-listBaskets"> 
            <div className="listBaskets-head">
                <h1>Your choice:</h1>
                <i className="fa fa-times fa-2x listBasketsClose" onClick={()=>$('.baskets-list').toggleClass('closed')} aria-hidden="true"></i>
            </div>
            <hr/>
            {
                films.map((item,index)=>{
                    total+=item.count*50
                    return <Item item={item} key={index} actions={actions}/>
                })
            }
            <div className="row row-footer">
                <div className="col-md-3"></div>
                <div className="col-md-2"></div>
                <div className="col-md-3">Total:</div>
                <div className="col-md-2">{total+` $`}</div>
                <div className="col-md-2"><button className="btn btn-warning btn-sm">submit</button></div> 
            </div>
        </div>
    );
  }
}

