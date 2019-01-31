import React,{Component} from 'react';
import ProjectCard from '../project/projectCard';
import * as modalAction from '../../actions/modalActions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux' ;
import { MODAL_TYPE_ADD_PROJECT} from '../../constants/constant';
import ApiService from '../../api/rest';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectList:[]
        }
    }

    getProjectList = () =>{
        ApiService.getProjectList()
        .then(res => res.json())
        .then((response)=>{
            console.log(response);
            response &&  this.setState({projectList:response})

        })
        .catch((err)=>{

        })
    }

    componentDidMount(){
this.getProjectList();
        
    }

    addNewProject = (e)=>{
        console.log("232323...!!");

        this.props.modalAction && this.props.modalAction.showModal(MODAL_TYPE_ADD_PROJECT,{
            onSave:(info)=>{
            ApiService.AddNewProject(info)
            .then((response)=>response.json())
            .then((res)=>{ console.log(res)
              res && this.setState({projectList:res.project})
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
            <div className="row" style={{backgroundColor:"#FFF",marginBottom:"12px"}}>
            
            <div className="col-md-12">
            <button onClick={(e)=>{this.addNewProject(e)}} type="button" class="btn btn-success btn-lg active pull-right"><i className="fa fa-plus"></i> Project</button>
            </div>
            <hr/>
            </div>
            <div className="row">
            {
                 this.state.projectList.map((pdata)=>{
                    return <ProjectCard key={pdata._id} info={pdata} /> 
                })
            }
            
            </div>
                
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
export default  connect(mapStateToProps , mapDispatchToProps)(Dashboard);

