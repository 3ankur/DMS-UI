

import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modalActions';
import Modal from '../modaldialog/modal';
import ApiService from '../../api/rest'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';


class AddNewStoryPopUp extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            title: "",
            summary:"",
            description: "",
            dueDate: new Date(),
            storyPriority: [],
            priority:"",
            realtedFile:"",
            assignTo:""
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }


    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    onClose = () => {
        this.props.hideModal();
        if (this.props.afterClose) {
            this.props.afterClose();
        }
    };




    componentDidMount() {

        this.props && this.props.team && this.props.team.users.forEach(tm => {
            tm.value = tm.user._id;
            tm.label = `${tm.user.userName} -${tm.user.firstName},${tm.user.lastName} (${tm.user.role.role})`;
        })

        console.log(this.props.team)

        ApiService.getStoryPriority()
            .then(res => res.json())
            .then((response) => {

                response.forEach(dt => {
                    dt.value = dt._id;
                    dt.label = dt.priority;
                });
                response && this.setState({ storyPriority: response })

            })
            .catch((err) => {
            })
    }

    handleselectedFile = event => {

        console.log(event.target.files[0]);
        this.setState({
            realtedFile: event.target.files[0]
        })
      }


      //handel the input change 
      onInputValueChange = (e)=>{
          console.log("ii",e.target.name);
          let change = {}
    change[e.target.name] = e.target.value
          this.setState(change)
      }


    createStory = (e) => {
       
var data = new FormData()
data.append('image', this.state.realtedFile);
//title  summary  priority  dueDate  assignTo  description  project
data.append('title', this.state.title);
data.append('summary', this.state.summary);
data.append('priority', this.state.priority);
data.append('dueDate', this.state.dueDate);
data.append('assignTo', this.state.assignTo);
data.append('description', this.state.description);
data.append('project', this.props.projectId);

ApiService.newStory(data)
.then(res=>{res.json()})
.then(response=>{
    console.log.log(response)
})
.catch(e=>{
    console.log("error occured..>!!")
})


//this.props.onSave && this.props.onSave(this.state);
        e.preventDefault()
    }


    handleChange =(data,type)=>{
        if(type==="Priority"){
            this.setState({priority:data.priority})
        }
        else{
            this.setState({assignTo:data._id})
        }
        console.log(data,type)
    }


    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="modal-header border-bottom-p mx-4 p-0 py-3">
                    <h5 className="modal-title c-p" id="exampleModalLabel">Add new Story</h5>
                    <button type="button" className="close c-p" data-dismiss="modal" aria-label="Close" onClick={this.onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body px-3 text-left">
                    <div class="">
                        <form  style={{maxHeight:"300px",overflow:"scroll"}}>

                            <div class="col-12  p-2">
                                <div className="col-2">
                                    <label for="company" style={frmLblStyle} class=" form-control-label">Title</label>
                                </div>
                                <div className="col-10">
                                    <input type="text" value={this.state.title} placeholder="Title" name="title" onChange={(e) => { this.onInputValueChange(e) }} className="form-control" />
                                </div>
                            </div>

                            <div class="col-12 p-2">
                                <div className="col-2">
                                    <label for="company" style={frmLblStyle} class=" form-control-label">Summary</label>
                                </div>
                                <div className="col-10">
                                    <input type="text" placeholder="Summary" name="summary" value={this.state.summary} onChange={(e) => { this.onInputValueChange(e) }} className="form-control" />
                                </div>
                            </div>
                            <div class="col-12 p-2">
                                <div className="col-2">
                                    <label for="company" style={frmLblStyle} class=" form-control-label">Priority</label>
                                </div>
                                <div className="col-10">
                                    <Select 
                                        onChange={ (e)=> this.handleChange(e,"Priority")}
                                        options={this.state.storyPriority}
                                    />
                                </div>
                            </div>

                            <div class="col-12 p-2">
                                <div className="col-2">
                                    <label for="company" style={frmLblStyle} class=" form-control-label">Due Date</label>
                                </div>

                                <div className="col-10">
                                    <DatePicker
                                        selected={this.state.dueDate}
                                        onChange={this.handleDateChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div class="col-12 p-2">
                                <div className="col-2">
                                    <label for="company" style={frmLblStyle} class=" form-control-label">Assignto</label>
                                </div>

                                <div className="col-10">

                                    <Select
                                        onChange={(e)=>{this.handleChange(e,"user")} }
                                        options={this.props.team.users || []}
                                    />

                                </div>
                            </div>
                            <div class="col-12 p-2">
                                <div className="col-2">
                                    <label for="vat" class=" form-control-label">Description</label>
                                </div>
                                <div className="col-10">
                                    <textarea  value={this.state.description}  name="description" onChange={(e) => { this.onInputValueChange(e) }} id="textarea-input" rows="4" placeholder="Content..." className="form-control"></textarea>
                                </div>

                            </div>

                            <div class="col-12  p-2">
                                <div className="col-2">
                                    <label for="company" style={frmLblStyle} class=" form-control-label">Realted Files</label>
                                </div>
                                <div className="col-10">
                                    <input type="file" onChange={this.handleselectedFile} className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer text-left text-white ">
                    <div className="row col-12 p-0 justify-content-between">

                        <div className="col-12 pull-right" style={{ textAlign: "right" }}>

                            <button type="button" className="btn btn-primary align-bottom bg-p mr-2" onClick={this.createStory} >Save</button>
                            <button type="button" className="btn  btn-secondary align-bottom bg-p" onClick={this.onClose}>Cancel</button>
                        </div>
                    </div>

                </div>
            </Modal>
        )

    }

}
export default connect(null, { hideModal })(AddNewStoryPopUp);

const frmLblStyle = {
    "float": "left",
    "margin": "5px"
}