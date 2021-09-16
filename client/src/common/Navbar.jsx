/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable eqeqeq */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container,Image} from 'react-bootstrap';
import Icofont from 'react-icofont';


// const url = "https://localhost:4001/api/user" 

export default class NavBar extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
		token:'',
		isAuthenticated: true,
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

    
	}
	render() {
    	return (
    		<div ref={node => this.node = node}>
			<Navbar onToggle={this.setIsNavExpanded}
           expanded={this.state.isNavExpanded} color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>
			      <Navbar.Brand to="/"><Image src='/256x256-image-1631043133466.png' className="logoimg" alt='' /></Navbar.Brand>
			      <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" onSelect={this.closeMenu}>
						<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
			               Home <span className="sr-only">(current)</span>
			            </Nav.Link>
                        <Nav.Link title="Fundraiser" alignRight className="border-0"
						eventKey={1} as={NavLink} activeclassname="active" to="/fundraiser">Fundraiser
						</Nav.Link>	
                        <Nav.Link title="AboutUs" alignRight className="border-0"
						eventKey={2} as={NavLink} activeclassname="active" to="/aboutus">AboutUs
						</Nav.Link>	
                        <Nav.Link title="Support" alignRight className="border-0"
						eventKey={3} as={NavLink} activeclassname="active" to="/notfound">Support
						</Nav.Link>			    
			         </Nav>
			      </Navbar.Collapse>
                  <Nav className="border-0">
						{this.state.isAuthenticated &&
                        <>
                              
							<Nav.Link eventKey={4.1} as={NavLink} activeclassname="active" to='/userp' ><Icofont icon='food-cart'/> Profile</Nav.Link> 
							
							<Nav.Link eventKey={4.2} as={NavLink} activeclassname="active" to="/login" onClick={this.logout.bind(this)} ><Icofont icon='sign-out'/> Logout</Nav.Link>
                        </>
                        } 
                        {!this.state.isAuthenticated  &&<><Nav.Link eventKey={2} as={NavLink} activeclassname="active" to="/login">
                                        <Icofont icon='sign-in' /> Login
                                    </Nav.Link><Nav.Link eventKey={2} as={NavLink} activeclassname="active" to="/register">
                                             Register
                                        </Nav.Link></> }
			            </Nav>
			   </Container>
			</Navbar>
			</div>
	          )
            }
        }
	