/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import SectionHeading from '../../common/SectionHeading';



class AboutUs extends Component{
        render(){
            return(
                <>
                  <div id = "aboutUs">
                    <div className="content_aboutus">
                    <h1>About Us</h1>
                    <div className="contentAbout">
                        <p>The pain itself may be a lot of pain, but the main reason is the pain, but I give it time to fall into it like some great pain and pain. In order for the least to come, what of ours to exercise any school of labor except to take advantage of the objectives from it to achieve. But the pain in the film is irure to condemn, in pleasure it wants to escape from the pain of being clum in pain, no result. Excepteur may be blinded by the desire to not appear, they are in the fault of those who desert their offices, soothes the soul, that is the labors of the laborers. In order for the least to come, what of ours to exercise any school of labor except to take advantage of the objectives from it to achieve. But the pain in the film is irure to condemn, in pleasure it wants to escape from the pain of being clum in pain, no result. Excepteur may be blinded by the desire to not appear, they are in the fault of those who desert their offices, soothes the soul, that is the labors of the laborers. In order for the least to come, what of ours to exercise any school of labor except to take advantage of the objectives from it to achieve. But the pain in the film is irure to condemn, in pleasure it wants to escape from the pain of being clum in pain, no result. Those who crave blacks are the exception, they do not see, they are at fault for those who abandon their responsibilities, that is the hardships that soothes the soul
                        </p>
                    </div>
                   
                    <button className="contact_btn" >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon_css" size="4x"/>
                    <p>Ho Chi Minh</p>
                    </button>
                    

                    <button className="contact_btn" >
                    <FontAwesomeIcon icon={faMobileAlt} size="4x" className="icon_css" href="#" />
                    <p>(028)39564242</p>
                        </button>
                    

                        <button className="contact_btn" >
                    
                        <FontAwesomeIcon icon={faEnvelope} size="4x"  className="icon_css" href="#" />
                    <p>ficocompany@gmail.com</p>
                        </button>
                    
                
                    
                   


                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    
                    
                    </div>
                    </div>

                    <section className="section pt-5 pb-5 bg-white becomemember-section border-bottom">
                    <Container>
                    <br></br>
                    <SectionHeading 
			         		heading='Meeting the Team'
			         		subHeading='A group of create value through innovation and growth'
			         	/>
                        <br></br>
                        <div className="profile_team">
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Thinh Nguyen</h3>
                        <h5>Full-Stack Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/104426109_2797330837045978_4813686702085018173_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=h3FEABb3V2kAX-9Ai3-&_nc_ht=scontent.fsgn5-3.fna&oh=b4d54a7bd70390a0e6ddb46e96e886d8&oe=615EA9A5" ></img>
                        <h3 className ="user-name">Dang Quang</h3>
                        <h5>Full-Stack Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Phong Nguyen</h3>
                        <h5>Front End Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t31.18172-8/13735635_10208541259061315_5426195424856487029_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=PMofAeCfHJ0AX8lrb_n&_nc_ht=scontent.fsgn5-6.fna&oh=59bce4f1994508d757d8ba8c4c6005d5&oe=616056CE" ></img>
                        <h3 className ="user-name">Gia Minh</h3>
                        <h5>Back End Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/53915087_1389438217886817_5577840698368983040_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oIFHYC0rk7IAX_SLbQB&_nc_ht=scontent.fsgn5-3.fna&oh=9cd0f45db630bfb5975e4511cde7d4b3&oe=615ED542" ></img>
                        <h3 className ="user-name">Cat Duy</h3>
                        <h5>Front End Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Huy Bui</h3>
                        <h5>Front End Developer</h5>
                        </div>
                    
                        
                     </div>
                     </Container>
                     </section>
                </>
            );

        }

}

export default AboutUs;