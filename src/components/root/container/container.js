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

class Container extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <HashRouter>
            <Switch>
                <Layout>
                    <Route exact path='/'  component={() => <Dashboard />} />
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