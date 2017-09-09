import React, { Component } from 'react';
import $ from 'jquery'
import './footer.css'
export class Footer extends Component {
  render() {
    return (
        <footer className="footer" onMouseLeave={()=>$('#hover-contact').html('')}>
            <div className="footer-contact">
            <i className="fa fa-skype fa-1x" aria-hidden="true" onMouseEnter={()=>$('#hover-contact').html('tesla7733')}></i>
            <i className="fa fa-phone fa-1x" aria-hidden="true" onMouseEnter={()=>$('#hover-contact').html('093 0315105')}></i>
            <i className="fa fa-envelope fa-1x" aria-hidden="true" onMouseEnter={()=>$('#hover-contact').html('admin@e-coding.club')}></i>
            </div>
            <span id="hover-contact"></span>
        </footer>
    );
  }
}

