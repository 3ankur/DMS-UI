import React from "react";

const TaskCard = (props)=>{
    let opt ={};
    opt["draggable"] =  props.isDraggable ? true : false;
    //{ ...opt}
    return (<div  onDragStart={(e) => props.onDragStart(e,props.taskInfo)} className="card bg-default" draggable >
    <div className="card-body ">
        <label>{props.taskInfo.taskCode || "EL-01"} </label>
        <label className="float-right"><i className="fa fa-user-circle-o" aria-hidden="true"></i></label>
        <p className="card-text card_task_title">{props.taskInfo.title}</p>
    </div>
</div>);
}

export default TaskCard;