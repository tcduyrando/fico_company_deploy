import React, {useState, useEffect } from 'react';
import {Col,Container,Row,Tab,Form,Nav,Button} from 'react-bootstrap';
import {ProgressBar, Modal, InputGroup, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../../common/PageTitle';
import Review from '../../common/Review';

export default function DetailFundraiser(props) {
    const [data, setData] = useState([]);
    const endPoint = "/api/fundraiser";
    const [showModal, setShowModal] = useState(false);
    const [showResult, setShowResult] = useState(false);

//get data from api
 const load = async () =>  {
    await fetch(endPoint + '/' + props.match.params.id)
      .then(response => response.json())
      .then(data =>
        {   setData(data)
            console.log(data)         
        }      
        );
  }
  const handleModel = () => {
    setShowModal(!showModal)
  }
  const handleResult = () => {
    setShowResult(!showResult)
  }
//load data automatically
useEffect(() => {
    load()
  }, [])

  return(
    <>
    <><PageTitle
            title={data.title}/><section className="section pt-4 pb-4 osahan-account-page">
                <Container>
                    <Row>
                        <Col md={9}>
                            <div className=' bg-white shadow-sm'>
                                <div className="border-bottom p-4">
                                    <img src={'' + data.image} alt="Fimage" style={{width: '1000px', height: '500px'}} />
                                </div>
                                <Tab.Container defaultActiveKey="first">
                                    <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
                                        <Container>
                                            <Row>
                                                <Col md={12}>
                                                    <Nav id="pills-tab">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="first">Information</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="third">Comment</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </section>
                                    <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
                                        <Container>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="offer-dedicated-body-left">
                                                        <Tab.Content className='h-100'>
                                                            <Tab.Pane eventKey="first">
                                                                <h6 className="mt-0 mb-3">Fund of Type: <a>{data.fundType}</a></h6>
                                                                <p className="description mt-0 mb-3">{data.information}</p>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="third">
                                                                <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                                                                    <Link to="#" className="btn btn-outline-primary btn-sm float-right">Top Comment</Link>
                                                                    <Review
                                                                        image="/dafault_profile.jpg"
                                                                        ImageAlt=""
                                                                        ratingStars={5}
                                                                        name='Roy Nguyen'
                                                                        profileLink="#"
                                                                        reviewDate="Tue, 22 May 2021"
                                                                        reviewText="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"
                                                                        likes="1,2k"
                                                                        dislikes="34" />
                                                                    <hr />
                                                                    <Review
                                                                        image="/dafault_profile.jpg"
                                                                        ImageAlt=""
                                                                        ratingStars={5}
                                                                        name='Andrei Bui'
                                                                        profileLink="#"
                                                                        reviewDate="Tue, 22 Sep 2021"
                                                                        reviewText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                                                        likes="500"
                                                                        dislikes="20" />
                                                                    <hr />
                                                                    <Link className="text-center w-100 d-block mt-4 font-weight-bold" to="#">See All comment</Link>
                                                                </div>
                                                                <div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
                                                                    <h5 className="mb-4">Leave Comment</h5>
                                                                    <Form>
                                                                        <Form.Group>
                                                                            <Form.Label>Your Comment</Form.Label>
                                                                            <Form.Control as="textarea" />
                                                                        </Form.Group>
                                                                        <Form.Group>
                                                                            <Button variant="primary" size="sm" type="button"> Submit Comment </Button>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </div>
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </section>
                                </Tab.Container>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="osahan-account-page-left shadow-sm bg-white h-100">
                                <div className="border-bottom p-4">
                                <ProgressBar animated now={data.percent} />
                                    <h6 className="font-weight-bold mt-0 mb-3"><h2>{data.donate} VND</h2> raised of {data.donaterequire} VND goal</h6>
                                </div>
                                <br />
                                <div className="font-weight-bold mt-0 mb-3 text-center">
                                <Button variant="primary" size="lg" onClick={handleModel} active>Donate</Button>
                                <Modal show={showModal} onHide={handleModel}>
                                <Modal.Header closeButton>
                                Select the amount you wish to donate
                                </Modal.Header>
                                <Modal.Body>
                                <InputGroup>
                                <Form.Control id="number"name="number" type="text" min="10000" placeholder="Amount"/>
                                <InputGroup.Text>VND</InputGroup.Text>
                                </InputGroup>
                    
                                </Modal.Body>
                                <Modal.Footer>
                                <Button onClick={handleResult}>Confirm donation</Button>
                                <Modal show={showResult} onHide={handleResult}>
                                <Modal.Header></Modal.Header>
                                <Modal.Body>
                                <Image className="img-fluid thanks" src="/thanks.png" alt="404" />
		                         <h1 className="mt-2 mb-2 text-center">Thank you so much for your contribution</h1>
                                </Modal.Body>
                                <Modal.Footer className="text-center">
                                <Button><Link to="/fundraiser">Go home</Link></Button>
                                </Modal.Footer>
                                 </Modal>                               
                                </Modal.Footer>
                                 </Modal>                                                   
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section></>
</>
  )
}
