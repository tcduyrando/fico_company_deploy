import React from 'react';
import {Form,Modal,Button} from 'react-bootstrap';
import axios from 'axios';

// const url = "/api/user/" 
class EditProfileModal extends React.Component {
    constructor(props){
		super(props);
		this.state = {
		  user: [],
		  id:'',
		  name: '',
		  dob: '',
		  location: '',
		  email: '',
		  password:'',
		  profilePicture: null,
		  isAuthenticated: false,
		  token: ''
		};
	  }

	 fetchData(){    
        fetch(`/api/user/${this.state.id}`,
		{
			headers: { 'x-access-token': this.state.token}
		})
            .then(response => response.json())
            .then(json=> this.setState({ user: json}))
            .catch(err => console.log(err))                     
        }
		
	componentDidMount() {
		this.fetchData();
		}

    onImageChange = event => {
        this.setState({
			profilePiceture: window.URL.createObjectURL(event.target.files[0])
        })
      };

	handleChange(e) {
        e.preventDefault();
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(
          obj)
    }
    componentWillMount(){
		this.setState({isAuthenticated: window.sessionStorage.getItem('isAuthenticated')}, () => console.log(this.state.isAuthenticated))
		this.setState({token: window.sessionStorage.getItem('token')})
		this.setState({id: window.sessionStorage.getItem('id')})
	}
	updateHandler(e){
        let formData = new FormData();
        let profilePicture = document.querySelector('#image');
        
        var url = `/api/user/${this.state.id}`;
        formData.append("name", this.state.name);
        formData.append("dob", this.state.dob);
        formData.append("location", this.state.location)
        formData.append("email", this.state.email)
        formData.append("password", this.state.password)
        formData.append("profilePicture", profilePicture.files[0])
        e.preventDefault();
		axios({
            url: url,
            method: 'PUT',
            headers: {
                "x-access-token" : this.state.token,
                "Content-Type": "multipart/form-data"
            },
            data: formData
        })
            .then(() => {
                alert('update successfully')
                window.location.reload()
                setTimeout(this.fetchData(), 10000)

            })
            .catch(error => {
                if (error.response) {
                    console.log(error.responderEnd);
                }
            });
    }

	render() {
    	return (
	        <Modal 
	        	show={this.props.show} 
	        	onHide={this.props.onHide}
		        size="356px"
		        centered
		   	  >
			  <Modal.Header closeButton={true}>
			    <Modal.Title as='h5' id="edit-profile">Edit profile</Modal.Title>
			  </Modal.Header>

			  <Modal.Body>
			    <Form>
               <div className="form-row">
			   <Form.Group className="col-md-12">
                     <Form.Label>Image</Form.Label>
                     <input type="file" name="image" id="image"
                          onChange={this.onImageChange.bind(this)} />   
                  </Form.Group>
			      <Form.Group className="col-md-12">
                     <Form.Label>Full Name</Form.Label>
                     <Form.Control type="text" placeholder="Enter Full Name"
					  id="name"
					  name="name"
					  autoComplete="off" 
					  required
					  value={this.state.name}
					  onChange={this.handleChange.bind(this)} />
                  </Form.Group>
				   <Form.Group className="col-md-12">
                     <Form.Label>Date of Birth</Form.Label>
                     <Form.Control type="text" defaultValue="0985517099" placeholder="Enter DOB" 
					  id="dob"
					  name="dob"
					  value={this.state.dob}
					  onChange={this.handleChange.bind(this)} />
                  </Form.Group>
                  <Form.Group className="col-md-12">
                     <Form.Label>Location</Form.Label>
                     <Form.Control type="text" defaultValue="0985517099" placeholder="Enter Location" 
					  id="location"
					  name="location"
					  value={this.state.location}
					  onChange={this.handleChange.bind(this)}/>
                  </Form.Group>
                  <Form.Group className="col-md-12">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" defaultValue="pct881435@gmail.com" placeholder="Enter Email address"
					  id="email"
					  name="email"
					  value={this.state.email}
					  onChange={this.handleChange.bind(this)}/>
                  </Form.Group>
                  <Form.Group className="col-md-12 mb-0">
                     <Form.Label>Update Password</Form.Label>
                     <Form.Control type="password" defaultValue="**********" placeholder="Enter passwor" 
					  id="password"
					  name="password" 
					  value={this.state.password}
					  onChange={this.handleChange.bind(this)}/>
                  </Form.Group>
               </div>
          </Form>
			  </Modal.Body>

			  <Modal.Footer>
			    <Button type='button' onClick={this.props.onHide} variant="outline-primary" className="d-grid text-center justify-content-center">CANCEL</Button>
			    <Button type='submit' variant="primary" value="submit" className='d-grid  text-center justify-content-center' onClick={this.updateHandler.bind(this)}>UPDATE</Button>
			  </Modal.Footer>
			</Modal>
    	);
    }
}
export default EditProfileModal;