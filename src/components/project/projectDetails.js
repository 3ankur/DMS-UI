import React from 'react';
import BasicDetail from '../project/basicDetail';
import ApiService from '../../api/rest';

class ProjectDetails extends React.Component{
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

    getProjectTeam = ()=>{
        ApiService.getProjectTeamByPId(this.props.match.params.projectId)
        .then(res => res.json())
        .then((response)=>{
            console.log(response);
            //response &&  this.setState({userList:response})

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

    render(){
            return(
                <BasicDetail
                 userList={this.state.userList}
                 addUserToProjectHandler ={this.addUserToProject}
                 />
            )
    }


}
export default  ProjectDetails;