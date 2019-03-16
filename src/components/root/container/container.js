/* eslint-disable no-console */ 
import React, { Component } from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import Layout from '../layout/layout';
import Dashboard from '../../dashboard/dasboard';
import ModalRoot from '../modalRoot';
import ProjectDetails from '../../project/projectDetails';
import UserContainer from '../../user/users';
import UserLogin from '../login/login';
import  Cookies from "js-cookie";
import UserActivity from "../../user-tasks/UserDasboard";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    progressBarFetch,
    setOriginalFetch,
    ProgressBar
  } from "react-fetch-progressbar";

  setOriginalFetch(window.fetch);
  window.fetch = progressBarFetch;
  
  const styles = {
    marginTop: "100px",
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  const UserAuth = {
    isAuthenticated: false,
    authenticate(com,rxProps) {
        const adminAccess = ["/project","/alluser"];
        if(Cookies.get("authtoken")){
            
            let extractToken = JSON.parse(Cookies.get("authtoken"));
            console.log("locaads",com);
            if(extractToken.role==="admin"){
              // adminAccess.indexOf(com.location.pathname)>-1 &&  
                for(let access of adminAccess ){
                    return (com.location.pathname).indexOf(access)>-1 ?  true : false;
                }
                return true;
            }else if(adminAccess.indexOf(com.location.pathname)===-1 && extractToken.role!=="admin"){
                return true;
            }
            else{
                return false;
            }

        }
        else{

            return false;
        }
        

    // this.isAuthenticated = true;
    
    // let infoL = {}  //Common.getLoginUserInfo();
    // const accessInfo = infoL ? infoL : rxProps.rxProps.loginUserInfo;
 
    // return true
    }
    };

  const PrivateRoute = ({ component : Component , ...rest}) =>(
    <Route {...rest} render = { (props) =>
    
    ( UserAuth.authenticate(props,rest) ? (
    <Component {...props} />
    ) :
    <Redirect
    to={{
    pathname: "/login",
    state: { from: props.location }
    }}
    />
    ) }
    />
    );

   
const    getDefaultPage = ()=>{
    console.log("2222222222222222222222222222222");
    if(Cookies.get("authtoken")){
        let extractToken = JSON.parse(Cookies.get("authtoken"));
        let com =  extractToken.role==="admin" ? Dashboard : UserActivity
        return com;
    }
    else{
        // toast.error("Session Expired", {
        //     position: toast.POSITION.TOP_RIGHT
        //   });

          setTimeout(()=>{
            window.location.href = "#/login";
          },200);

        //return UserLogin
    }
}

class Container extends Component{
    // constructor(props){
    //     super(props);
    // }

 

    render(){
        return(
            
            <HashRouter>
            <Switch>
                <Layout>
                <ProgressBar style={{ marginBottom: "10px" }} />
                    <PrivateRoute exact path='/user-activity'  component={() => <UserActivity />} />
                    <Route exact path='/'  component={getDefaultPage()} />
                    <Route exact path='/login'  component={UserLogin} />
                    <PrivateRoute exact path='/project'  component={() => <Dashboard />} />
                    <PrivateRoute exact path='/alluser'  component={() => <UserContainer />} />
                    <PrivateRoute exact path='/project/projectDetails/:projectId'  component={ProjectDetails} />
                     <ModalRoot />
                    <ToastContainer />
                </Layout>
            </Switch>
            </HashRouter>
        )
    }

}
export default Container;