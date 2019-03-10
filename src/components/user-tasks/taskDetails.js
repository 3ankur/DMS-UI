import React from "react";
import "./taskdetails.css";
class TaskDetails extends React.Component{
// constructor(props){
//     super(props);
// }

    getTaskPriorityClass = (type="Low")=>{
        //
        if(type==="Low"){
            return "text-primary fa fa-arrow-up"
        }else if(type==="MEDIUM"){
            return "text-warning fa fa-arrow-up"
        }else{
            return "text-danger fa fa-arrow-up"
        }

    }
    render(){
        return(
            // <div className="row">
            //     <div className="col-12">
            //     <div className="col-1"></div>
            //     <div className="col-11">
            //         <div>
            //             <span><i className="fa fa-envelope-open"></i></span>
            //             <span className="m-1">Ankur Board / </span><span>EL-01</span>
            //             <span className="float-right"><i className="fa fa-close"></i></span>
            //         </div>
            //     </div>
            //     </div>
            // <header>{this.props.taskDetail.title}</header>
            // </div>

            <div className="mineside">
                <div className="row">
                    <div className="min_cont">

                        {/* <div id="sidebar" className="column col-1 sidebar-offcanvas" >
                            <ul className="nav" id="menu">
                                <li className="ml-1"><a href="#"><i className="fa fa-envelope-open"></i> </a></li>
                                <li className="ml-1"><a href="#"><i className="fa fa-list"></i></a></li>
                                <li className="ml-1"><a href="#"><i className="fa fa-paperclip"></i> </a></li>
                                <li><a href="#"><i className="fa fa-refresh"></i> </a></li>
                                <li><a href="#"><i className="glyphicon glyphicon-list-alt"></i></a></li>
                            </ul>
                        </div> */}

                        <div class=" col-12" id="main">
                            
                            <div className="row">
                            <div className="col-12">
                        <span><i className=""></i></span>
                      <span className="m-1">Ankur Board / </span><span>EL-01</span>
                         <span className="float-right"><i className="fa fa-close"></i></span>
                     </div>

                            <header className="m-2">{this.props.taskDetail.title}</header>
                                <div className="col-12">
                                    <h6>Details</h6>
                                    <div className="">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><span className="float-left">Type</span> <span className="float-right">Story</span> </li>
                                            <li class="list-group-item"> <span className="float-left">Status</span> <span className="badge badge-primary float-right">{this.props.taskDetail && this.props.taskDetail.status}</span></li>
                                            <li class="list-group-item"> <span className="float-left">Priority</span> <span className="float-right"><i className={this.getTaskPriorityClass(this.props.taskDetail.priority)}></i> {this.props.taskDetail && this.props.taskDetail.priority}</span></li>
                                            <li class="list-group-item"> <span className="float-left">Resolution</span> <span className="float-right">N/A</span></li>
                                            <li class="list-group-item"> <span className="float-left">Fixed Version</span> <span className="float-right">N/A</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h6>Description</h6>
                                    <div className="">
                                        <p>{this.props.taskDetail.description}</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h6>Attachments</h6>
                                    <div className="">
                                        <p>None</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h6>People</h6>
                                    <div className="">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><span className="float-left">Assignee</span> <span className="float-right">N/A</span> </li>
                                            <li class="list-group-item"> <span className="float-left">Reporter</span> <span className="badge badge-primary float-right">N/A</span></li>
                                            <li class="list-group-item"> <span className="float-left">Assigned</span> <span className="badge badge-primary float-right">N/A</span></li>
                                       </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h6>Time Tracking</h6>
                                    <div className="">
                                    <label>Estimated</label>
                                        <div className="progress mb-2">
                                            <div className="progress-bar bg-success" role="progressbar"  style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                        <label>Remaining</label>
                                        <div className="progress mb-2">
                                            <div className="progress-bar bg-info" role="progressbar"  style={{"width": "25%"}}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                        <label>Logged</label>
                                        <div className="progress mb-2">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default TaskDetails;