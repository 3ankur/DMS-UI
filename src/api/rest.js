import  Cookies from "js-cookie";

var API_END_POINT = "";

if(window.location.href.indexOf("localhost")>-1){
  API_END_POINT = "http://127.0.0.1:8001/";
} 
else{
  API_END_POINT = "https://dms-rest-api.herokuapp.com/";
}
export default class Rest {

    static AddNewProject(data){

     return  fetch(API_END_POINT+"project", {
            method: 'POST', 
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
    }

    static getProjectList(){
      return  fetch(API_END_POINT+"project", {
            method: 'GET',
            
          })
    }

    //get the all users 
    static getUserList(){
      return  fetch(API_END_POINT+"user", {
            method: 'GET'
          })
    }
   //get user roles
   static getUserRoles(){
    return  fetch(API_END_POINT+"user/role", {
      method: 'GET'
    })
   }

   //add users 
   static addUser(userData){
    return  fetch(API_END_POINT+"user", {
          method: 'POST',
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          headers: {
            "Content-Type": "application/json",
        },
          body:JSON.stringify(userData) 
        })
  }
   
  static validateUserName(uname){
    return  fetch(API_END_POINT+"user/validateUserName/"+uname, {
      method: 'GET'
    })
  }

  //add user to project
  static addUserIntoProject(data){
    return  fetch(API_END_POINT+"project/addUserIntoProject", {
      method: 'POST',
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      headers: {
        "Content-Type": "application/json",
    },
      body:JSON.stringify(data) 
    })
  }

  //get project team members
  static getProjectTeamByPId(id){
     return  fetch(API_END_POINT+`project/team/${id}`, {
      method: 'GET'
    })
  }

    //get story priority
    static getStoryPriority(id){
      return  fetch(API_END_POINT+`project/storyPriority`, {
       method: 'GET'
     })
   }

   //application login 
   
    //get story priority
    static login(data){
      return  fetch(API_END_POINT+`user/login`, {
        method: 'POST',
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        headers: {
          "Content-Type": "application/json",
      },
        body:JSON.stringify(data) 
      })
   }


   static newStory(data){
    return fetch(API_END_POINT+'project/addTask', {
      method: 'POST',
      body: data
    })
   }


     //get project team members
  static getProjectActivity(id){
    return  fetch(API_END_POINT+`project/getTasks/${id}`, {
     method: 'GET'
   })
 }

 static getUserActivity(){
  return  fetch(API_END_POINT+`project/userActivity`, {
   method: 'GET',
   headers: getHeader()

 })
}

static updateTaskStatus(data){
  return  fetch(API_END_POINT+`project/updateTaskStatus`, {
    method: 'PUT',
    headers: getHeader(),
    body:JSON.stringify(data) 
  })
}

//

static taskdetail(id){
  return  fetch(API_END_POINT+`project/taskdetail/${id}`, {
   method: 'GET',
   headers: getHeader()

 })
}
 //getHeader
}

const getHeader = ()=>{
  const myHeaders = new Headers();
   let accesData = Cookies.get("authtoken") ? JSON.parse(Cookies.get("authtoken") ) : {};
  if(Object.keys(accesData).length){
    myHeaders.append('authorization', accesData.token);
  }
  myHeaders.append('Content-Type', 'application/json');
  
  return myHeaders;
}