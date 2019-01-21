

import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modalActions';
import Modal from '../modaldialog/modal';
import ApiService from '../../api/rest'


class AddProjectModal extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: ""
        }
    }

    onClose = () => {
        this.props.hideModal();
        if (this.props.afterClose) {
            this.props.afterClose();
        }
    };




    componentDidMount() {
    }


    createProject = (e) => {
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


    render() {

        return (
            <Modal onClose={this.onClose}>
                <div className="modal-header border-bottom-p mx-4 p-0 py-3">
                    <h5 className="modal-title c-p" id="exampleModalLabel">Add new Project</h5>
                    <button type="button" className="close c-p" data-dismiss="modal" aria-label="Close" onClick={this.onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body px-3 text-left">
                <div class="">
                    <form onSubmit={this.createProject}>
                        
                            <div class="form-group">
                                <label for="company" class=" form-control-label">Company</label>
                                <input type="text"  placeholder="Project name" name="projectName" onChange={(e)=>{this.onProjectNameChange(e)}} class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="vat" class=" form-control-label">Description</label>
                                <textarea name="textarea-input" onChange={(e)=>{this.onProjectDescChange(e)}} id="textarea-input" rows="4" placeholder="Content..." class="form-control"></textarea>
                            </div>
                    </form>
                    </div>
                </div>
                <div className="modal-footer text-left text-white ">
                    <div className="row col-12 p-0 justify-content-between">

                        <div className="col-12 pull-right" style={{ textAlign: "right" }}>

                            <button type="button" className="btn btn-primary align-bottom bg-p mr-2" onClick={this.createProject} >Save</button>
                            <button type="button" className="btn  btn-secondary align-bottom bg-p" onClick={this.onClose}>Cancel</button>
                        </div>
                    </div>

                </div>
            </Modal>
        )

    }

}
export default connect(null, { hideModal })(AddProjectModal);