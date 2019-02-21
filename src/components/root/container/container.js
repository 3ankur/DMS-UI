/* eslint-disable no-console */ 
import React, { Component } from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import Layout from '../layout/layout';
import Test from '../../html-component/test';
import HtmlComponents from '../../html-component/mainHTMComponent';
import Dashboard from '../../dashboard/dasboard';
import ModalRoot from '../modalRoot';
import ProjectDetails from '../../project/projectDetails';
import UserContainer from '../../user/users';
import UserLogin from '../login/login';
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
                    <Route exact path='/'  component={() => <Dashboard />} />
                    <Route exact path='/login'  component={UserLogin} />
                    <Route exact path='/project'  component={() => <Dashboard />} />
                    <Route exact path='/user'  component={() => <UserContainer />} />
                    <Route exact path='/project/projectDetails/:projectId'  component={ProjectDetails} />
                    <Route  path='/html-component'  component={HtmlComponents} />
                    <ModalRoot />
                </Layout>
            </Switch>
            </HashRouter>
        )
    }

}
export default Container;