import React from 'react';
import BasicDetail from '../project/basicDetail';
import ApiService from '../../api/rest';
import * as modalAction from '../../actions/modalActions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux' ;
import { MODAL_TYPE_ADD_NEW_STORY} from '../../constants/constant';

class ProjectDetails extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userList:[],
            projectTeam:[]
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

    getProjectTeam = ()=>{
        ApiService.getProjectTeamByPId(this.props.match.params.projectId)
        .then(res => res.json())
        .then((response)=>{
            console.log(response);
            response &&  this.setState({projectTeam:response})

        })
        .catch((err)=>{
        })
    }

    componentDidMount(){
this.getUserList();
this.getProjectTeam();
    
    }

    addUserToProject =(id)=>{
        console.log(id,this.props)
        let data = {
            projectId : this.props.match.params.projectId,
            userId :id
        }
         ApiService.addUserIntoProject(data)
        .then(res => res.json())
        .then((response)=>{
            console.log(response);
            //response &&  this.setState({userList:response})
        })
        .catch((err)=>{
        })

    }

    //add new story on project
    addNewStory = ()=>{
        console.log("it the handeler");
        this.props.modalAction && this.props.modalAction.showModal(MODAL_TYPE_ADD_NEW_STORY,{
            onSave:(info)=>{
            // ApiService.addUser(info)
            // .then((response)=>response.json())
            // .then((res)=>{ console.log(res)
            //   res && this.setState({userList:res.users})
            // })
            // .catch((err)=>{  })
             this.props.modalAction.hideModal();
          },
          team:this.state.projectTeam,
          projectId : this.props.match.params.projectId,
        className:"alertPopup"
        });


    }

    render(){
            return(
                <BasicDetail
                 userList={this.state.userList}
                 addUserToProjectHandler ={this.addUserToProject}
                 projectTeam={this.state.projectTeam}
                 addNewStoryHandeler={this.addNewStory}
                 />
            )
    }


}

function mapDispatchToProps(dispatch){
    return {
        modalAction : bindActionCreators(modalAction,dispatch)
    };
}

function mapStateToProps(state){
    return {
        modal : state.modal
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ProjectDetails)  ;