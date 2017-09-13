import React, { Component } from 'react';
import './addFilm.css'

export class AddFilm extends Component {
    com
    constructor(props){
        super(props)
        this.params = {
            name:'',
            year:'',
            ge_drama:false,
            ge_comedy:false,
            ge_horror:false,
            genres:[]
        } 
    }
    componentDidMount(){
        console.log('this:',this)
    }

    render() {
        let {params} = this
        return (
            <div>
                <div className="row">
                    <div className="movie">
                        <span className="title">What movie did you watch?</span>
                        <input type="text" className="form-control" ref={input=>params.name=input} placeholder="Name"/>
                        <input type="text" className="form-control" ref={input=>params.year=input} placeholder="Year"/>
                        <div className="genres">
                                <input ref={input=>params.ge_drama=input}type="checkbox" value="3"/>Drama <br/>             
                                <input ref={input=>params.ge_comedy=input}type="checkbox" value="1"/>Comedy <br/>
                                <input ref={input=>params.ge_horror=input}type="checkbox" value="2"/>Horror <br/>
                        </div>
                        <button className="movie-send" onClick={()=>clickAdd(this)}>add</button>  
                        <div className="add-result"></div>  
                    </div>
                </div>      
            </div>
        );
    }
}

function clickAdd(that){
    let {name,year,ge_drama,ge_comedy,ge_horror,genres} = that.params
    let {actions} = that.props
    ge_drama.checked&&genres.push(+ge_drama.value)
    ge_comedy.checked&&genres.push(+ge_comedy.value)
    ge_horror.checked&&genres.push(+ge_horror.value)
    if(name.value.trim()!=0&&year.value.trim()!=0&&genres.length!=0)
        actions.addFilm(name.value,+year.value,genres)
    else document.getElementsByClassName('add-result')[0].innerHTML = 'Incorrect data...'
    name.value=year.value=''
    ge_drama.checked=ge_comedy.checked=ge_horror.checked=false
}