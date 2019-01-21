
export default class Rest {

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

}