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
import { ToastContainer } from 'react-toastify';
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
    
        if(Cookies.get("authtoken")){
            let extractToken = JSON.parse(Cookies.get("authtoken"));
                if( extractToken.role=="admin"){
                    return true;
                }
                else{
                     return true;
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
    pathname: "/",
    state: { from: props.location }
    }}
    />
    ) }
    />
    )

class Container extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            
            <HashRouter>
            <Switch>
                <Layout>
                <ProgressBar style={{ marginBottom: "10px" }} />
                <Route exact path='/user-activity'  component={() => <UserActivity />} />
                    <Route exact path='/'  component={() => <Dashboard />} />
                    <Route exact path='/login'  component={UserLogin} />
                    <Route exact path='/project'  component={() => <Dashboard />} />
                    <Route exact path='/user'  component={() => <UserContainer />} />
                    <Route exact path='/project/projectDetails/:projectId'  component={ProjectDetails} />
                   
                    <ModalRoot />
                    <ToastContainer />
                </Layout>
            </Switch>
            </HashRouter>
        )
    }

}
export default Container;