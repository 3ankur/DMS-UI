import React from 'react';

const getUserType =(usr)=>{
console.log(usr.role.role)
if("Developer" === usr.role.role){
    return  "badge badge-primary"
}
if("QA" === usr.role.role){
    return  "badge badge-secondary"
}
if("Project Manager"===usr.role.role){
    return  "badge badge-success"
}
return "badge badge-default"
}

const ProjectTeam = (props)=>{
return  <ul className="list-group list-group-flush">
{
    props.projectTeam && props.projectTeam.users && props.projectTeam.users.map((team,key)=>{
        return  <li key={key} class="list-group-item"><a href="#"> <i class="fa fa-user"></i> { `${team.user.firstName},${team.user.lastName} ${team.user.userName}` }<span className={`${getUserType(team.user)}  pull-right` }>{team.user.role.role}</span></a></li>
    })
}
{/* <li class="list-group-item"><a href="#"> <i class="fa fa-envelope-o"></i> Mail Inbox <span class="badge badge-primary pull-right">10</span></a></li>
<li class="list-group-item"><a href="#"> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span></a></li>
<li class="list-group-item"><a href="#"> <i class="fa fa-bell-o"></i> Notification <span class="badge badge-success pull-right">11</span></a></li>
<li class="list-group-item"><a href="#"> <i class="fa fa-comments-o"></i> Message <span class="badge badge-warning pull-right r-activity">03</span></a></li> */}

</ul>
} 
export default ProjectTeam;