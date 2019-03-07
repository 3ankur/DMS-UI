/**
* Copyright (c) 2019
* @author Ankur Vishwakarma
*/
import React, { Component } from 'react';
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';
import BreadCrumbs from '../breadcrumb/breadcrumb';
import Chat from "../chat/chat";

class Layout extends Component {

    constructor(props){
        super(props);
    }
   
    componentDidMount() {
console.log("this",this.props.location,"/login");
    }

    render() {
        return (
            
                this.props.location.pathname!=="/login" ? 
                <div className="">
                <SideBar />
                 <div id="right-panel" className="right-panel" style={{width:"100%"}}>
                     <Header />
                     <BreadCrumbs />
                     <div className="content mt-3">
                             {this.props.children}
                     </div>
                     <Chat />
                 </div>
             </div>  
             : this.props.children
            
            
        );
    }
}

export default (Layout);
