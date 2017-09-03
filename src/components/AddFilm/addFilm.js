import React, { Component } from 'react';
import './addFilm.css'

export class AddFilm extends Component {
  render() {
    let name,year
    return (
        <div>
            <div className="row">
                <div className="movie">
                    <span className="title">New movie:</span>
                    <input type="text" className="form-control" ref={input=>name=input} placeholder="Name"/>
                    <input type="text" className="form-control" ref={input=>year=input} placeholder="Year"/>
                    <select className="form-control">
                        <option>Drama</option>
                        <option>Comedy</option>
                        <option>Horror</option>
                    </select>
                    <button className="btn btn-primary btn-sm">add</button>    
                </div>
            </div>      
        </div>
    );
  }
}

