import React from "react";
import './chat.css';
import io from "socket.io-client";
import  Cookies from "js-cookie";
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isChatOn:false,
            messages:[],
            txtMsg:""
        }
        this.socket = io('127.0.0.1:8001'); //192.168.0.105 localhost  172.30.16.25
       
    
       
        this.socket.on("RECEIVE_MESSAGE",(data)=>{
            this.addMessage(data);
        })
    }

    sendNewMessage = (e)=>{

     e.preventDefault();
       const info = Cookies.get("authtoken") ?  JSON.parse(Cookies.get("authtoken")) : null ;
       if(info){
        this.socket.emit('SEND_MESSAGE',{
            userName:info.userName,
            message:this.state.txtMsg,
            projectId:info.projectId,
        });
        this.setState({txtMsg: ''});
       }else{
           window.location.href="#/login";
       }
       
    }

    addMessage = (msgInfo)=>{
            let prevSt = this.state.messages;
            prevSt.push(msgInfo);
            this.setState({messages:prevSt});
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

    render(){
        return(
            <div className="chat_box">
               {
                   this.state.isChatOn && 
                   <div className="chat-popup" id="myForm">
                    <form className="form-container" onSubmit={(e)=>{this.sendNewMessage(e);}}>
                        <span className="float-right" onClick={(e) => { this.closeForm(e) }}><i className="fa fa-close"></i> </span>
                        <h1>Chat</h1>
                        {/* <label for="msg"><b>Message</b></label> */}
                        {/* <textarea placeholder="Type message.." name="msg" required></textarea> */}
                        <div className="msgbox">
                            {
                                this.state.messages.map((msg,ix)=>{
                                    return (
                                        <div className="row mb-1" key={ix}>
                                            <div className="col-2 float-left">
                                                <div className="numberCircle">AV</div>
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
                        <button type="submit" onClick={(e)=>{this.sendNewMessage(e);} } className="btn">Send</button>
                       
                        {/* <button type="button" className="btn cancel" onClick={(e) => { this.closeForm(e) }} >Close</button> */}
                   
                    </form>
                </div>
               }
                
{
    !this.state.isChatOn &&     <button class="open-button" onClick={(e) => { this.openForm(e) }}>Chat</button>
}
            
            
            </div>

        )
    }

}

export default Chat;