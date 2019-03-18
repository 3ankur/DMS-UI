import React from "react";
import ApiService from "../../api/rest";
import { toast } from 'react-toastify';
import TaskCard from "./taskCard";
import TaskDetails from "./taskDetails";

class UserDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoList:[],
            doneList:[],
            inPogressList:[],
            taskDetails:{}
        }
    }

    getUserBoardActivity = ()=>{
        ApiService.getUserActivity()
        .then((res)=>{
                console.log(res);
            if (!res.ok) {
                if(res.status===401){
                    window.location.href="#/login";
                }
                throw Error(res);
            }
            return res.json();
            //res.json();
        
        })
        .then((response)=>{
          
            console.log("adfsdfd",response);
            this.setState({
                todoList:response.taskList.todo || [],
                doneList:response.taskList.done || [],
                inPogressList:response.taskList.inPogress || [],
                    });
        })
        .catch((err)=>{
            console.log(err);
            toast.error(err.statusText ? err.statusText :  "Error Notification !", {
                position: toast.POSITION.TOP_RIGHT
              });
        });
    }

    componentDidMount(){
        
      this.getUserBoardActivity();
    }
    

    updateTaskStatus = (taskInfo,updatedStatus)=>{
        if(taskInfo && updatedStatus){
            let obj={
                taskId:taskInfo._id,
                status:updatedStatus
            };
            ApiService.updateTaskStatus(obj)
            .then((res)=>{
                res.json()
            })
            .then((response)=>{
                this.getUserBoardActivity();
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    getTaskDetails = (id)=>{
        ApiService.taskdetail(id)
        .then((res)=>{
           return  res.json();
        })
        .then((response)=>{
            console.log("2323====>",response);
            this.setState({taskDetails:response});
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    onTaskDrop = (e,dropType)=>{
        console.log(dropType,e.dataTransfer.getData("info"));
        if(e.dataTransfer.getData("info")){
            let taskInfo = JSON.parse(e.dataTransfer.getData("info"));
            if(taskInfo.status!==dropType){
                this.updateTaskStatus(taskInfo,dropType);
            }
        }
    }
    onDragStart = (e,info)=>{
       console.log(info);
       e.dataTransfer.setData("info", JSON.stringify(info));
       //dragFrom
      // e.dataTransfer.setData("statusFrom", dragFrom);
    }

    onTaskDragOver = (e)=>{
        e.preventDefault();
    }

    onCloseDetail = ()=>{
        this.setState({taskDetails:{}});
    }

    render(){
        return(
           
   <div className="col-12" >
      <div className="row" style={{"background": "#FFF","height": "450px"}}>

                    <div className={`${Object.keys(this.state.taskDetails).length ? "col-8" : "col-12"}`}>
                        <div className="col-4">
                            <label>Todo</label>
                                <div className="task_list" 
                                onDrop={(e)=>{this.onTaskDrop(e,"TODO")}} 
                                onDragOver={(e)=>{this.onTaskDragOver(e)}}
                                >

                                {
                                    this.state.todoList.map((task,idx)=>{
                                        return <TaskCard 
                                        key={idx}
                                        taskInfo={task}
                                        isDraggable={true}
                                        onDragStart={this.onDragStart}
                                        taskDetailInfo={this.getTaskDetails}
                                         />
                                    })
                                }

                                
                                    
                            </div>
                        </div>
                        <div className="col-4"
                         
                         >
                            <label>In Pogress</label>
                            <div className="task_list" 
                            onDrop={(e)=>{this.onTaskDrop(e,"INPOGRESS");}}
                            onDragOver={(e)=>{this.onTaskDragOver(e)}} 
                            >
                            {
                                    this.state.inPogressList.map((task,idx)=>{
                                        return <TaskCard 
                                        key={idx}
                                        taskInfo={task}
                                        isDraggable={true}
                                        onDragStart={this.onDragStart}
                                        taskDetailInfo={this.getTaskDetails}
                                         />
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-4">
                            <label>Done</label>
                            <div className="task_list" 
                            onDrop={(e)=>{this.onTaskDrop(e,"DONE");}}
                            onDragOver={(e)=>{this.onTaskDragOver(e)}}
                            >
                            {
                                    this.state.doneList.map((task,idx)=>{
                                        return <TaskCard 
                                        key={idx}
                                        taskInfo={task}
                                        isDraggable={true}
                                        onDragStart={this.onDragStart}
                                        taskDetailInfo={this.getTaskDetails}
                                         />
                                    })
                                }
                            </div>
                        </div>
                    </div>

      {
          this.state.taskDetails && Object.keys(this.state.taskDetails).length &&  
      <div className="col-4">
        <TaskDetails
            taskDetail={this.state.taskDetails.info}
            onCloseDetail={this.onCloseDetail}
        />
      </div> 
      }

      </div>
   </div>

        )
    }
}

export default UserDashboard;