

import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modalActions';
import Modal from '../modaldialog/modal';
import ApiService from '../../api/rest'
import Select from 'react-select';


class AddUserModal extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            userName:"",
            email:"",
            password:"",
            role:"",
            roles:[],
            isValidUserName:true
        }

        

        this.textHandleChange = this.textHandleChange.bind(this);
    }

    onClose = () => {
        this.props.hideModal();
        if (this.props.afterClose) {
            this.props.afterClose();
        }
    };


    textHandleChange (evt) {
        console.log(evt.target.name )
        let uname = evt.target.name;
        this.setState({ [evt.target.name]: evt.target.value },()=>{
                
            if(uname === "userName"){
                ApiService.validateUserName(this.state.userName)
                .then(res => res.json())
        .then((response)=>{
            console.log(response);
            if(response && response.length){
                this.setState({isValidUserName:false})
            }else{
                this.setState({isValidUserName:true})
            }

        })
            }
        });
      }
    


    componentDidMount() {
        ApiService.getUserRoles()
        .then(res => res.json())
        .then((response)=>{
            console.log(response);

            //roles  { value: 'chocolate', label: 'Chocolate' },
            response.forEach(dt=>{
                dt.value = dt._id;
                dt.label = dt.role;
            });

            response &&  this.setState({roles:response})

        })
        .catch((err)=>{

        })
    }


    addUser = (e) => {
        console.log(22,this.state)
         this.props.onSave && this.props.onSave(this.state);
        e.preventDefault()
    }

    onProjectNameChange =(e)=>{
        this.setState({name:e.target.value})
    }

    onProjectDescChange =(e)=>{
        this.setState({description:e.target.value})
    }

    handleChange = (selectedOption) => {
        this.setState({role:selectedOption._id})
        console.log(`Option selected:`, selectedOption);
      }


    render() {

        return (
            <Modal onClose={this.onClose}>
                <div className="modal-header border-bottom-p mx-4 p-0 py-3">
                    <h5 className="modal-title c-p" id="exampleModalLabel">Add new User</h5>
                    <button type="button" className="close c-p" data-dismiss="modal" aria-label="Close" onClick={this.onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body px-3 text-left" style={{height:"350px","overflow-y":"scroll"}}>
                <div class="">
                    <form onSubmit={this.createProject}>
                            <div class="form-group">
                                <label for="company" class=" form-control-label">First Name</label>
                                <input type="text" placeholder="Project name" value={this.state.firstName} name="firstName" onChange={this.textHandleChange} class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="company" class=" form-control-label">Last Name</label>
                                <input type="text" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.textHandleChange}class="form-control" />
                            </div>

                            <div class="form-group">
                                <label for="company" class=" form-control-label">User Name</label> <span><i className={ this.state.userName  ?  (this.state.isValidUserName ? "fa fa-check" : "fa fa-exclamation" ) : ""  }></i></span>
                                <input type="text" value={this.state.userName} placeholder="User Name" name="userName" onChange={this.textHandleChange} class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="vat" class=" form-control-label">Role</label>
                                <Select
                                onChange={this.handleChange}
                                options={this.state.roles}
                                />
                                
                            </div>

                            <div class="form-group">
                                <label for="company" class=" form-control-label">Email</label>
                                <input type="text" placeholder="Project name" value={this.state.email} name="email" onChange={this.textHandleChange} class="form-control" />
                            </div>

                              <div class="form-group">
                                <label for="company" class=" form-control-label">Password</label>
                                <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.textHandleChange} class="form-control" />
                            </div>

                            
                    </form>
                    </div>
                </div>
                <div className="modal-footer text-left text-white ">
                    <div className="row col-12 p-0 justify-content-between">

                        <div className="col-12 pull-right" style={{ textAlign: "right" }}>

                            <button type="button" className="btn btn-primary align-bottom bg-p mr-2" onClick={this.addUser} >Save</button>
                            <button type="button" className="btn  btn-secondary align-bottom bg-p" onClick={this.onClose}>Cancel</button>
                        </div>
                    </div>

                </div>
            </Modal>
        )

    }

}
export default connect(null, { hideModal })(AddUserModal);