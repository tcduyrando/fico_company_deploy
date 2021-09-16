/* eslint-disable array-callback-return */
import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form} from 'react-bootstrap';

const url = "/api/auth/register"
class Register extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            name:"",
           email:"",
           password:"",
           confirmpassword:"",
           listOfUsers:[],
		   valid: false

        }
    }
	
    validateCheck()
    {
        let counter = 0;
        this.state.listOfUsers.map((e)=>{
            if(e.email === this.state.email || e.name === this.state.name)
            {
                counter +=1;
            }
        })
        if(counter >0)
        {
            alert("user is already registered")
        }
        else
        {
            if(this.state.password ===  this.state.confirmpassword)
            {
                this.signUp();
               alert("Registration Successful!")
               this.setState({ valid: true });
              
            }
            else
            {
                alert("confirmed password does not match")
            }
        }

    }
    signUp()
    {
        let emp = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            
        }
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(emp)
        })
        .then(data=>{
            if(data.result === 'authenticated'){
                sessionStorage.setItem('isAuthenticated', 1)
                
            }else{
                sessionStorage.setItem('isAuthenticated', 0)
                
            }
        })
    }
    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }
     
	render(){
		if (this.state.valid===true){
			this.signUp();
		}
    	return (
    	  <Container fluid className='bg-white'>
	         <Row>
	            <Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
	            <Col md={8} lg={6}>
	               <div className="login d-flex align-items-center py-5">
	                  <Container>
	                     <Row>
	                        <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
	                           <h3 className="login-heading mb-4">New Buddy!</h3>
	                           <Form>
							   <div className="form-label-group">
	                                 <Form.Control type="text" id="inputName" placeholder="Enter name" 
									 name ="name"
									 value = {this.state.name}
									 onChange={this.handleChange.bind(this)}/>
	                                 <Form.Label htmlFor="inputName">Full Name</Form.Label>
	                              </div>
	                              <div className="form-label-group">
	                                 <Form.Control type="email" id="inputEmail" placeholder="Email address" 
									 name ="email"
									 value = {this.state.email}
									 onChange={this.handleChange.bind(this)}/>
	                                 <Form.Label htmlFor="inputEmail">Email address / Mobile</Form.Label>
	                              </div>
	                              <div className="form-label-group">
	                                 <Form.Control type="password" id="inputPassword" placeholder="new-password" 
									 name ="password" 
									 value = {this.state.password}
									 onChange={this.handleChange.bind(this)}/>
	                                 <Form.Label htmlFor="inputPassword">Password</Form.Label>
	                              </div>
	                              <div className="form-label-group mb-4">
	                                 <Form.Control type="password" id="inputPassword1" placeholder="password" 
									 name ="confirmpassword" 
									 value = {this.state.confirmpassword}
									 onChange={this.handleChange.bind(this)}/>
	                                 <Form.Label htmlFor="inputPassword1">Confirm Password</Form.Label>
	                              </div>
	                              <Link to="/login" type="submit" onClick={this.validateCheck.bind(this)} className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</Link>
	                              <div className="text-center pt-3">
	                                 Already have an account? <Link className="font-weight-bold" to="/login">Sign In</Link>
	                              </div>
	                           </Form>
	                        </Col>
	                     </Row>
	                  </Container>
	               </div>
	            </Col>
	         </Row>
	      </Container>
    	);
    }
}

export default Register;