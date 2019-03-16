import React from 'react';
import projectImage from '../../images/project.jpg';
const ProjectCard = (props) => {

    return <div className="col-md-4">
        <aside className="profile-nav alt">
            <section className="card">
                <div className="card-header user-header alt bg-dark">
                    <div className="media">
                        {/* <a href="#">
                            <img class="align-self-center rounded-circle mr-3" alt="" src={projectImage} />
                        </a> */}
                        <div className="media-body">
                            <h2 className="text-light display-6"><a style={{"color":"#f8f9fa"}} href={`#/project/projectDetails/${props.info._id}`} >{props.info && props.info.projectName}</a> </h2>
                            {/* <p>Project Manager</p> */}
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href="#"> <i className="fa fa-envelope-o"></i> Mail Inbox <span className="badge badge-primary pull-right">10</span></a></li>
                    <li className="list-group-item"><a href="#"> <i className="fa fa-tasks"></i> Recent Activity <span className="badge badge-danger pull-right">15</span></a></li>
                    <li className="list-group-item"><a href="#"> <i className="fa fa-bell-o"></i> Notification <span className="badge badge-success pull-right">11</span></a></li>
                    <li className="list-group-item"><a href="#"> <i className="fa fa-comments-o"></i> Message <span className="badge badge-warning pull-right r-activity">03</span></a></li>
                </ul>
            </section>
        </aside>
    </div>
}

export default ProjectCard;