import React, { Component } from 'react';
import cn from 'classnames'
import $ from 'jquery'
import {ListOfBaskets} from'./ListOfBaskets/listOfBaskets'
import './basket.css'

export class Basket extends Component {            
    render() {
        let {count,films,actions} = this.props
        let visible = cn({
            basketVis:count})
        return (
            <div>
                <div className={`app-basket ${visible}`} onClick={()=>$('.baskets-list').toggleClass('closed')}>
                    <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
                    <span className="app-basket-count">{count!==0?count:''}</span>    
                </div>
                <div className="baskets-list closed">
                    <ListOfBaskets films={films} actions={actions}/>
                </div>
                
            </div>
        );
    }
}

