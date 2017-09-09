import React, { Component } from 'react';
import $ from 'jquery'
import './footer.css'
export class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="footer-contact">
            <i className="fa fa-skype fa-2x" aria-hidden="true"></i>
            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </div>
        </footer>
    );
  }
}

