import React, { Component } from 'react';
import './login.css'

export class Login extends Component {
  render() {
    let user,pass,reg_name='',reg_pass='',reg_login='',reg_age='',reg_tel=''
    let {logged_in,actions} = this.props
    let visible = logged_in?'none':'block'
    return (
        <div>
            <span className="success">Login</span>
            <div className="row" style={{display:visible}}>
                <div className="login">
                    <input type="text" className="form-control" ref={input=>user=input} placeholder="Login"/>
                    <input type="text" className="form-control" ref={input=>pass=input} placeholder="Password"/>
                    <button onClick={()=>actions.login(user.value,pass.value)}>login</button>    
                </div>
            </div>
            <div className="row" style={{display:visible}}>
                <span id="auth">Registration</span>
                <div className="auth">
                    <input ref={input=>reg_name=input} type="text" className="form-control" placeholder="username"/>
                    <input ref={input=>reg_pass=input} type="text" className="form-control" placeholder="password"/>
                    <input ref={input=>reg_login=input} type="text" className="form-control" placeholder="login"/>
                    <input ref={input=>reg_age=input} type="text" className="form-control" placeholder="age"/>
                    <input ref={input=>reg_tel=input} type="text" className="form-control" placeholder="telephone"/>
                    <button onClick={()=>{
                             let obj_auth={
                                    username:reg_name.value,
                                    password:reg_pass.value,
                                    login:reg_login.value,
                                    age:Number(reg_age.value),
                                    telephone:reg_tel.value
                                }
                        actions.auth(obj_auth)
                        //document.getElementsByClassName('auth')[0].remove();
                        }}>send</button>
                </div>
            </div>         
        </div>
    );
  }
}

