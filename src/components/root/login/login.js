import React from 'react';
import ApiService from "../../../api/rest";
import  Cookies from "js-cookie";
import { toast } from 'react-toastify';
//var Cookies = require('js-cookie');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           email:"",
           password:""
        }
    }

    componentDidMount(){
      Cookies.remove('authtoken', { path: '' }); // removed!
    }

    emailChangeHandeler =(e)=>{
    //  console.log(e.target.value)
      this.setState({email:e.target.value})
    }

    passwordChangeHandeler =(e)=>{
    //  console.log(e.target.value)
      this.setState({password:e.target.value})
    }

    doLogin = (e)=>{

     
      ApiService.login(this.state)
      .then(res => res.json())
        .then((response)=>{
            console.log(response);
            let date = new Date();
            date.setHours(date.getHours()+1);
            //date.setDate(date.getDate() + 1);
            let loginInfo={};
            loginInfo.token = response.token;
            loginInfo.role =  response.role;
            loginInfo.userName =  response.userName;
            loginInfo.projectId =  response.userProjectId;

            Cookies.set('authtoken', JSON.stringify(loginInfo), { expires: date });
           // response &&  this.setState({userList:response})
         //  this.props.history.push("/");
         setTimeout(()=>{
            window.location.href="/";
         },200)

        })
        .catch((err)=>{
         toast.error("Something wrong", {
            position: toast.POSITION.TOP_RIGHT
          });
        })
      e.preventDefault();
    }

    render() {
        return (
            <div className="sufee-login d-flex align-content-center flex-wrap">
            <div className="container">
               <div className="login-content">
                  <div className="login-logo">
                     <a href="index.html">
                     <img className="align-content" src="images/logo.png" alt="" />
                     </a>
                  </div>
                  <div className="login-form">
                     <form onSubmit={(e)=> this.doLogin(e)}>
                        <div className="form-group">
                           <label>Email address</label>
                           <input value={this.state.email} onChange={(e)=>{this.emailChangeHandeler(e)}} type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                           <label>Password</label>
                           <input value={this.state.password}  onChange={(e)=>{this.passwordChangeHandeler(e)}} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="checkbox">
                           <label>
                           <input type="checkbox" /> Remember Me
                           </label>
                           <label className="pull-right">
                           <a href="#">Forgotten Password?</a>
                           </label>
                        </div>
                        <button onClick={(e)=> this.doLogin(e)} type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
                )
            }
         }
         
export default Login;