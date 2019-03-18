import React from "react";
import './chat.css';
import io from "socket.io-client";
import  Cookies from "js-cookie";
import ApiService from "../../../api/rest";
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            teamMembers:[],
            isChatOn:false,
            messages:[],
            chatBoxMsgList:[],
            txtMsg:""
        }
        this.getTeam();
        const userInfo = Cookies.get("authtoken") ?  JSON.parse(Cookies.get("authtoken")) : null ;
        
        //127.0.0.1:8001
        let token = userInfo ? "?token="+userInfo.userName : "";
        let SERVER_URL = "https://dms-rest-api.herokuapp.com"+token;
        if(window.location.href.indexOf("localhost")>-1){
            SERVER_URL = "http://127.0.0.1:8001"+token;
            //?token=abc
          } 
        this.socket = io(SERVER_URL); //192.168.0.105 localhost  172.30.16.25
       console.log("its the socket instance",this.socket);
         this.socket.on("RECEIVE_MESSAGE",(data)=>{
            this.addMessage(data);
        })
    }

    getTeam(){
        const info = Cookies.get("authtoken") ?  JSON.parse(Cookies.get("authtoken")) : null;
       
        if(info){
            ApiService.getProjectTeamByPId(info.projectId)
        .then((res)=>{
            return res.json()
        })
        .then((jsonRes)=>{
                this.setState({teamMembers:jsonRes})
        })
        .catch(err=>{
            console.log(err);
        })
        }
        
    }

    sendNewMessage = (e,idx)=>{
       e.preventDefault();
       const info = Cookies.get("authtoken") ?  JSON.parse(Cookies.get("authtoken")) : null ;
       if(info){
        if(this.state.chatBoxMsgList && idx>-1){
            this.socket.emit('SEND_MESSAGE',{
                sender:info.userName,
                message:this.state.txtMsg,
                projectId:info.projectId,
                receiver:this.state.chatBoxMsgList[idx]["userName"]
            });
        }
        
        this.setState({txtMsg: ''});
       }else{
           window.location.href="#/login";
       }
       
    }

    addMessage = (msgInfo)=>{
        console.log("---this -->",msgInfo);
             let prevSt = this.state.chatBoxMsgList;
            // prevSt.push(msgInfo);
            // this.setState({messages:prevSt});

            const info = Cookies.get("authtoken") ?  JSON.parse(Cookies.get("authtoken")) : null ;
            if(info){
                let chatUserName = "N/A";
                if(info.userName === msgInfo.sender){
                    chatUserName = "ME";
                }else{
                    chatUserName =`${msgInfo.receiver.charAt(0)}${msgInfo.receiver.charAt(msgInfo.receiver.length-1)}` ;
                }

               let userIdx =  prevSt.findIndex((u)=>{return u.userName ===msgInfo.receiver});
               if(userIdx>-1){
                prevSt[userIdx]["messages"].push({"userName":chatUserName,"message":msgInfo.message});
                this.setState({chatBoxMsgList:prevSt});  
               }else{
                let senderIdx =  prevSt.findIndex((u)=>{return u.userName ===msgInfo.sender});
                if(senderIdx>-1){
                    prevSt[senderIdx]["messages"].push({"userName":chatUserName,"message":msgInfo.message});
                this.setState({chatBoxMsgList:prevSt}); 
                }
               }
                
            }
            else{
                
            }
           
    }

    componentDidMount(){

    }

    onTxtMsgChange = (e)=>{
        this.setState({txtMsg:e.target.value});
    }

     openForm =()=> {
      //  document.getElementById("myForm").style.display = "block";
       this.setState({isChatOn:true});

      }
      
    closeForm=()=> {
      //  document.getElementById("myForm").style.display = "none";
      this.setState({isChatOn:false});
      }

      chatWithUser= (e,user)=>{
        //chatBoxMsgList
        console.log(user);
        const prevState = this.state.chatBoxMsgList;
       let idx =  prevState.findIndex((u)=>{return u._id===user._id});
       if(idx>-1){
        prevState[idx]["isChatOn"] = true;
       }else{
        user.isChatOn = true;
        user.messages = [];
        prevState.push(user);
       }
        this.setState({chatBoxMsgList:prevState});
        e.preventDefault();
      }

      renderTeamMembers = ()=>{
        const info = Cookies.get("authtoken") ?  JSON.parse(Cookies.get("authtoken")) : null ;

          return (
            info ?
            <div className="friends_popup" id="myForm">
             <form className="form-container" onSubmit={(e)=>{this.sendNewMessage(e);}}>
                 <span className="float-right" onClick={(e) => { this.closeForm(e) }}><i className="fa fa-close"></i> </span>
                 <h4>Team</h4>
            <ul className="list-group list-group-flush friendlist_ul">
            {
                this.state.teamMembers && this.state.teamMembers.users.map((member,index)=>{
                    if(info.userName !==member.user.userName){
                        return <li onClick={(e)=>{this.chatWithUser(e,member.user);} } key={`${member.user.userName}-${index}`} className="list-group-item"><span className="fa fa-user-circle-o"></span><span> {member.user.userName}</span></li>;
                    }
                })
            }
          </ul>
          </form>
                 </div>
          : ""
          )
      }

      //close the chat window
      closeChatWindow = (e,idx)=>{
        const prevSt = this.state.chatBoxMsgList;
        if(idx>-1){
            prevSt[idx]["isChatOn"] = false;
            this.setState({chatBoxMsgList:prevSt});
        }
      }

      getChatPopUp = ()=>{
          return this.state.chatBoxMsgList && 
            this.state.chatBoxMsgList.map((chatUsr,chatIdx)=>{
                return (
                    chatUsr.isChatOn &&  <div key={chatIdx} className="chat-popup" id="myForm">
                    <form className="form-container" onSubmit={(e)=>{this.sendNewMessage(e,chatIdx);}}>
                        <span className="float-right" onClick={(e) => { this.closeChatWindow(e,chatIdx) }}><i className="fa fa-close"></i> </span>
                        <h4>Chat</h4> with <span>{chatUsr.userName}</span>
                        <div className="msgbox">
                            {
                                chatUsr.messages.map((msg,ix)=>{
                                    return (
                                        <div className="row mb-1" key={ix}>
                                            <div className="col-2 float-left">
                                                <div className="numberCircle">{msg.userName}</div>
                                            </div>
                                            <div className="col-10">
                                                <div> <span> {msg.message}  </span></div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <input type="text" value={this.state.txtMsg}
                        onChange={(e)=>{this.onTxtMsgChange(e)}}
                        placeholder="Type Message" className="form-control mb-2" />
                        <button type="submit" onClick={(e)=>{this.sendNewMessage(e,chatIdx);} } className="btn">Send</button>
                       
                        {/* <button type="button" className="btn cancel" onClick={(e) => { this.closeForm(e) }} >Close</button> */}
                   
                    </form>
                </div>
                )
            })
           
        
      }

    render(){
        return(
            <div id="chat_container">
                <div className="chat_box">
                {this.state.isChatOn &&  this.renderTeamMembers()}
                {this.getChatPopUp()}
                </div>
            {
    !this.state.isChatOn &&  <span className="open-button" onClick={(e) => { this.openForm(e) }}><i className="fa fa-comment"></i></span>
}
            </div>

        )
    }

}

export default Chat;