import React from 'react'; 
import {Link} from 'react-router-dom';
import {Row,Col,Container,InputGroup,Button,FormControl,Image,Form} from 'react-bootstrap';
import FontAwesome from './FontAwesome';

class Footer extends React.Component {

	render() {
    	return (
    		<>
			    <section className="footer pt-5 pb-5">
			         <Container>
			            <Row>
						<Col md={4} sm={12}>
			                  <h6 className="mb-3">Subscribe to our Newsletter</h6>
			                  <Form className="newsletter-form mb-1">
			                     <InputGroup className="mb-3">
								    <FormControl
								       type="text" 
								       placeholder="Please enter your email" 
								    />
								    <InputGroup.Append>
								      <Button type="button" variant="primary">Subscribe</Button>
								    </InputGroup.Append>
								 </InputGroup>
			                  </Form>
			                  <p><Link className="text-info" to="register">Register now</Link> to get updates on <Link to="offers">Discover Fundraiser</Link></p>
			                  <div className="app">
			                     <p className="mb-2">DOWNLOAD APP</p>
			                     <Link to="#">
			                     	<Image src="img/google.png" alt='' fluid />
			                     </Link>
			                     <Link to="#">
			                     	<Image src="img/apple.png" alt='' fluid />
			                     </Link>
			                  </div>
			               </Col>
			               <Col md={1} sm={6} className="mobile-none">
			               </Col>
			               <Col md={2} sm={6} xs={6}>
			                  <h6 className="mb-3">About FC</h6>
			                  <ul>
			                     <li><Link to="#">About Us</Link></li>
			                     <li><Link to="#">Culture</Link></li>
			                     <li><Link to="#">Blog</Link></li>
			                     <li><Link to="#">Careers</Link></li>
			                     <li><Link to="#">Contact</Link></li>
			                  </ul>
			               </Col>
			               <Col md={2} sm={4} xs={6}>
			                  <h6 className="mb-3">For Fundraiser</h6>
			                  <ul>
			                     <li><Link to="#">Community</Link></li>
			                     <li><Link to="#">Developers</Link></li>
			                     <li><Link to="#">Blogger Help</Link></li>
			                     <li><Link to="#">Verified Users</Link></li>
			                     <li><Link to="#">Code of Conduct</Link></li>
			                  </ul>
			               </Col>
			               <Col md={2} sm={4} xs={4} className="m-none">
			                  <h6 className="mb-3">For Resources</h6>
			                  <ul>
			                     <li><Link to="#">Advertise</Link></li>
			                     <li><Link to="#">Add a Market</Link></li>
			                     <li><Link to="#">Claim your uling</Link></li>
			                     <li><Link to="#">For Businesses</Link></li>
			                     <li><Link to="#">Owner Guidelines</Link></li>
			                  </ul>
			               </Col>
			            </Row>
			         </Container>
			    </section>
		      <footer className="pt-4 pb-4 text-center">
		         <Container>
		            <p className="mt-0 mb-0">{this.props.copyrightText}</p>
		            <small className="mt-0 mb-0"> Made with <FontAwesome icon={this.props.madewithIconclassName} /> by
		            <Link className="text-danger ml-1" target="_blank" to={`${this.props.firstLink}`}>{this.props.firstLinkText}</Link>
		            </small>
		         </Container>
		      </footer>
              
		    </>
    	);
    }
}

Footer.defaultProps = {
    sectionclassName: 'footer-bottom-search pt-5 pb-5 bg-white',
	popularCHclassName:'text-black',
	popularCountries: [],
	popularFHclassName:'mt-4 text-black',
	popularFood: [],
	copyrightText: '© Copyright 2020 Fico Company. All Rights Reserved',
	madewithIconclassName: 'heart heart-icon text-danger',
	firstLinkText: ' Group Fico',
	firstLink: "https://github.com/RoyNg88/fico_company"
}

export default Footer;