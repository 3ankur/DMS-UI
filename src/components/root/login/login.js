import React from 'react';
import ApiService from "../../../api/rest"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           email:"",
           password:""
        }
    }

    emailChangeHandeler =(e)=>{
      console.log(e.target.value)
      this.setState({email:e.target.value})
    }

    passwordChangeHandeler =(e)=>{
      console.log(e.target.value)
      this.setState({password:e.target.value})
    }

    doLogin = (e)=>{
      ApiService.login(this.state)
      .then(res => res.json())
        .then((response)=>{
            console.log(response);
           // response &&  this.setState({userList:response})

        })
        .catch((err)=>{
        })
      e.preventDefault();
    }

    render() {
        return (
            <div class="sufee-login d-flex align-content-center flex-wrap">
            <div class="container">
               <div class="login-content">
                  <div class="login-logo">
                     <a href="index.html">
                     <img class="align-content" src="images/logo.png" alt="" />
                     </a>
                  </div>
                  <div class="login-form">
                     <form onSubmit={(e)=> this.doLogin(e)}>
                        <div class="form-group">
                           <label>Email address</label>
                           <input value={this.state.email} onChange={(e)=>{this.emailChangeHandeler(e)}} type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group">
                           <label>Password</label>
                           <input value={this.state.password}  onChange={(e)=>{this.passwordChangeHandeler(e)}} type="password" class="form-control" placeholder="Password" />
                        </div>
                        <div class="checkbox">
                           <label>
                           <input type="checkbox" /> Remember Me
                           </label>
                           <label class="pull-right">
                           <a href="#">Forgotten Password?</a>
                           </label>
                        </div>
                        <button onClick={(e)=> this.doLogin(e)} type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
                )
            }
         }
         
export default Login;