import React from 'react';
import ProjectTeam from './projectTeamList';
const BasicDetails = (props) => {
    return <div className="animated fadeIn">
        <div className="ui-typography">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <strong className="card-title" v-if="headerText">Typography</strong>
                        </div>
                        <div className="card-body">
                            <div className="typo-headers">
                                <div className="row">
                                    <div className="col-10">
                                        <h6 className="pb-4 display-5">Random Tiny Heading H6</h6>
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
                                            <div className="col-3">
                                                <button type="button" onClick={props.addNewMember} class="btn btn-secondary btn-sm"><i class="fa fa-plus"></i>&nbsp; Member</button>
                                            </div>
                                        </div>
                                        <div className="col-12" style={{ borderTop: "1px solid #CCC" }}>
                                            <ProjectTeam />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">Well</h3>
                                        <div className="jumbotron">
                                            Zebras have excellent eyesight. It is believed that they can see in color. Like most ungulates, the zebra's eyes are on the sides of its head, giving it a wide field of view.
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="display-5 my-3"><span><i class="fa fa-desktop"></i></span> Activity</h2>
                                        <hr />
                                    </div>
                                    <div className="col-12">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><a href="#"> <i class="fa fa-envelope-o"></i> Mail Inbox <span class="badge badge-primary pull-right">10</span></a></li>
                                            <li class="list-group-item"><a href="#"> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span></a></li>
                                            <li class="list-group-item"><a href="#"> <i class="fa fa-bell-o"></i> Notification <span class="badge badge-success pull-right">11</span></a></li>
                                            <li class="list-group-item"><a href="#"> <i class="fa fa-comments-o"></i> Message <span class="badge badge-warning pull-right r-activity">03</span></a></li>
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