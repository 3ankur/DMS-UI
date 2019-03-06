import  Cookies from "js-cookie";
export default class Rest {

//authorization

    


    static AddNewProject(data){

     return  fetch("project", {
            method: 'POST', 
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
    }

    static getProjectList(){
      return  fetch("project", {
            method: 'GET'
          })
    }

    //get the all users 
    static getUserList(){
      return  fetch("user", {
            method: 'GET'
          })
    }
   //get user roles
   static getUserRoles(){
    return  fetch("user/role", {
      method: 'GET'
    })
   }

   //add users 
   static addUser(userData){
    return  fetch("user", {
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
    return  fetch("user/validateUserName/"+uname, {
      method: 'GET'
    })
  }

  //add user to project
  static addUserIntoProject(data){
    return  fetch("project/addUserIntoProject", {
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
     return  fetch(`project/team/${id}`, {
      method: 'GET'
    })
  }

    //get story priority
    static getStoryPriority(id){
      return  fetch(`project/storyPriority`, {
       method: 'GET'
     })
   }

   //application login 
   
    //get story priority
    static login(data){
      return  fetch(`user/login`, {
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
    return fetch('project/addTask', {
      method: 'POST',
      body: data
    })
   }


     //get project team members
  static getProjectActivity(id){
    return  fetch(`project/getTasks/${id}`, {
     method: 'GET'
   })
 }

 static getUserActivity(){
  return  fetch(`/project/userActivity`, {
   method: 'GET',
   headers: getHeader()

 })
}

static updateTaskStatus(data){
  return  fetch(`/project/updateTaskStatus`, {
    method: 'PUT',
    headers: getHeader(),
    body:JSON.stringify(data) 
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