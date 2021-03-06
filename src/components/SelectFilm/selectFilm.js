import React, { Component } from 'react';
import $ from 'jquery'
import './selectFilm.css'
export class SelectFilm extends Component {
  render() {
    let {logged_in,film,actions} = this.props
    let {name,year,id,inBasket} = film
    return (

        <div className="selectFilm" onClick={(e)=>clickOne(e)}>
          <div className="center">
          <i className="fa fa-times fa-2x selectClose" onClick={()=>$(".selectFilm").toggleClass('open')} aria-hidden="true"></i>
            <div className="content">
              <img src="/img/film.jpg" alt=""/>
              <div className="property">
                <span>{name}</span>
                <span>{year}</span>
              </div>
              <div>This film is very good! Because ....mmmm i dont know.... :P </div>
              <div className="row select-footer">
                <button className="btn btn-link" onClick={()=>$(".selectFilm").toggleClass('open')}>back</button>
                <button disabled={!logged_in} className="btn btn-primary btn-sm" onClick={()=>actions.toRent(id)}>rent</button>
                <button className="btn btn-primary btn-sm" disabled={inBasket} onClick={()=>actions.addToBascket(film,film.id)}>buy</button>
                <i className="fa fa-shopping-basket" aria-hidden="true" onClick={()=>$('.baskets-list').toggleClass('closed')}></i>
              </div>
              <div className="rent-result"></div>
            </div>
          </div>
        </div>
    );
  }
}

let clickOne = (e)=>{
  let container = $(".selectFilm");
  if (container.has(e.target).length === 0){
      container.toggleClass('open')}
}