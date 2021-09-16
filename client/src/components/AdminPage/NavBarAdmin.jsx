/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable eqeqeq */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container,Image} from 'react-bootstrap';
import Icofont from 'react-icofont';

export default class NavBarAdmin extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}
 
	componentDidMount() {
		this.setState({isAuthenticated: sessionStorage.getItem('isAuthenticated')})
		this.setState({token: window.sessionStorage.getItem('token')})
	}
	logout(event){
		event.preventDefault();
        window.sessionStorage.setItem("isAuthenticated", false);
        this.setState({isAuthenticated: window.sessionStorage.getItem('authenticated')})
        window.sessionStorage.removeItem("token");
		window.sessionStorage.removeItem("id");
        this.props.history.push('/login')
    
	}
	render() {
    	return (
    		<div ref={node => this.node = node}>
			<Navbar onToggle={this.setIsNavExpanded}
           expanded={this.state.isNavExpanded} color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>
			      <Navbar.Brand to="/"><Image src='/256x256-image-1631043133466.png' className="logoimg" alt='' /></Navbar.Brand>
			      <Navbar.Toggle/>
                  <Nav className="border-0">            
							<Nav.Link eventKey={4.1} as={NavLink} activeclassname="active" to='/admin/projects' ><Icofont icon='food-cart'/> Admin</Nav.Link> 
							
			            </Nav>
			   </Container>
			</Navbar>
			</div>
	          )
            }
        }
	