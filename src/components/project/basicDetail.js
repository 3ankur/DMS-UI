import React from 'react';
import ProjectTeam from './projectTeamList';
import moment from "moment";

let getPriorityClass = (p)=>{
   // 
   if(p==="Low"){
       return " badge badge-success ";
   }else if(p==="Medium"){
    return " badge badge-warning ";
   }else if(p==="High"){
    return " badge badge-danger ";
   }else{
    return " badge badge-danger " ;
   }
}
const BasicDetails = (props) => {
    return <div className="animated fadeIn">
        <div className="ui-typography">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <strong className="card-title" v-if="headerText">Project Info</strong>
                        </div>
                        <div className="card-body">
                            <div className="typo-headers">
                                <div className="row">
                                    <div className="col-10">
                                      
                                    </div>
                                    <div className="col-2">
                                        Start Date<br />
                                        <strong >12-March-2019</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="vue-misc">
                                {/* <h2 className="display-5 my-3">Team</h2>
                            <hr/> */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="col-12">
                                            <div className="col-9">
                                                <h3><span><i class="fa fa-group"></i></span> Team</h3>
                                            </div>
                                            
                                        </div>
                                        <div className="col-12" style={{ borderTop: "1px solid #CCC" }}>
                                            <ProjectTeam projectTeam={props.projectTeam} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Full Name </th>
                                            <th scope="col">UserName</th>
                                            <th scope="col">Role</th>
                                            <th> Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.userList && props.userList.map((user,ukey)=>{
                                                return <tr key={ukey}>
                                                      <td>{ukey+1}</td>
                                                      <td>{user.firstName} {user.lastName}</td>
                                                      <td>{user.userName}</td>
                                                      <td>{user.role.role}</td>
                                                      <td><button onClick={(e)=> props.addUserToProjectHandler(user._id)} className="btn btn-primary"><i className="fa fa-plus"></i></button> </td>
                                                </tr>
                                            })
                                        }
                                       
                                    </tbody>
                                </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12" style={{"borderBottom" :" 2px solid"}}>
                                       <div className="col-9"><h2 className="display-5 my-3"><span><i class="fa fa-desktop"></i></span> Activity</h2>
                                           </div> 
                                           <div className="col-3">
                                                <button type="button" onClick={props.addNewStoryHandeler} class="btn btn-secondary btn-sm float-right mt-4"><i class="fa fa-plus"></i>&nbsp; Story</button>
                                            </div>
                                    </div>
                                  
                                    <div className="col-12">
                                        <ul class="list-group list-group-flush">
                                            {/* <li class="list-group-item"><a href="#"> <i class="fa fa-envelope-o"></i> Mail Inbox <span class="badge badge-primary pull-right">10</span></a></li>
                                            <li class="list-group-item"><a href="#"> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span></a></li>
                                           
                                            <li class="list-group-item"><a href="#"> <i class="fa fa-bell-o"></i> Notification <span class="badge badge-success pull-right">11</span></a></li>
                                            <li class="list-group-item"><a href="#"> <i class="fa fa-comments-o"></i> Message <span class="badge badge-warning pull-right r-activity">03</span></a></li> */}
                                       
                                            {
                                                props.recentActivity &&  props.recentActivity.tasks && props.recentActivity.tasks.map((activity,idx)=>{
                                                    return  <li class="list-group-item" key={idx}>
                                                    {/* <a href="#"> <i class="fa fa-tasks"></i> {activity.title}
                                                    
                                                    <span class="badge badge-danger pull-right">15</span></a> */}

                                                        <div class="row">
                                                            <div class="col-5">
                                                                <a href="#"> <i class="fa fa-tasks"></i> {activity.title}   </a>
                                                            </div>
                                                            <div class="col-2">
                                                                <span> {activity.assignTo.userName}</span>
                                                            </div>
                                                            <div className="col-3">
                                                                <span className="float-left">Created Date<br />
                                                                    { moment( activity.createdAt).format("MM/DD/YYYY")}
                                                                    
                                                                    </span>
                                                                <span className="float-right">Due Date<br />
                                                                { moment( activity.dueDate).format("MM/DD/YYYY")}</span>
                                                            </div>
                                                            <div class="col-2">
                                                                <span className={`${getPriorityClass(activity.priority)}  pull-right`}>{activity.priority}</span>
                                                            </div>
                                                        </div>

                                                    
                                                    
                                                    </li>;
                                                })
                                            }

                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="my-3">
                                            <span><i class="fa fa-dollar"></i> </span>
                                            Billing/Milestones</h2>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BasicDetails;