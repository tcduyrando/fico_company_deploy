/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import FontAwesome from '../../common/FontAwesome';
import SectionHeading from '../../common/SectionHeading';
import JoinToDay from './join-today';

export default class Homepage extends React.Component {
    render() {
        return (
            <>
				<section className="section pt-5 pb-5 banner-bg">
					<Container>
					<img class="banner" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2019/10/Promote-charity-event.png" ></img>
                    <Link to="/" className="btn btn-success btn-lg">
			                  	Join Today <FontAwesome icon='chevron-circle-right' />
			                  </Link>
					</Container>
				</section>
				<section className="section pt-5 pb-5 bg-gray homepage-add-section">
					<Container>
						<Row>
                           <JoinToDay/>
						</Row>
					</Container>
				</section>
			    <section className="section pt-5 pb-5 bg-white becomemember-section border-bottom">
			         <Container>
			         	<SectionHeading 
			         		heading='Join With Us'
			         		subHeading='A community of create value through innovation and growth'
			         	/>
			            <Row>
			               <Col sm={12} className="text-center">
			                  <Link to="register" className="btn btn-success btn-lg">
			                  	Create an Account <FontAwesome icon='chevron-circle-right' />
			                  </Link>
			               </Col>
			            </Row>
			         </Container>
			    </section>
    		</>
    	);
    }
}


const options={
	responsive: {
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },

        lazyLoad: true,
        pagination: false.toString(),
        loop: true,
        dots: false,
        autoPlay: 2000,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}
