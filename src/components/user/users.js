import React,{Component} from 'react';
import * as modalAction from '../../actions/modalActions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux' ;
import { MODAL_TYPE_ADD_NEW_USER} from '../../constants/constant';
import UserContainer from './userContainer';

import ApiService from '../../api/rest';
class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            userList:[]
        }
    }

    getUserList= () =>{
        ApiService.getUserList()
        .then(res => res.json())
        .then((response)=>{
            console.log(response);
            response &&  this.setState({userList:response})

        })
        .catch((err)=>{

        })
    }

    componentDidMount(){
        this.getUserList();
    }

    addNewUser = (e)=>{
        console.log("232323...!!");

        this.props.modalAction && this.props.modalAction.showModal(MODAL_TYPE_ADD_NEW_USER,{
            onSave:(info)=>{
            ApiService.addUser(info)
            .then((response)=>response.json())
            .then((res)=>{ console.log(res)
              res && this.setState({userList:res.users})
            })
            .catch((err)=>{  })
             this.props.modalAction.hideModal();
          },
        className:"alertPopup"
        });
    }

    render(){
        return (
            <div className="animated fadeIn">
               
            <UserContainer userList={this.state.userList} addUserHandeler={this.addNewUser} />
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modalAction : bindActionCreators(modalAction,dispatch)
    };
}

function mapStateToProps(state){
    return {
        modal : state.modal
    }
}


//export default ProtocolSetup;
export default  connect(mapStateToProps , mapDispatchToProps)(Users);

