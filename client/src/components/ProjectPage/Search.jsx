/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import './Search.css';
import { Button, Form, InputGroup, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaSearch } from 'react-icons/fa';

const Search = React.memo(props => {
  const {onloadedProjects} = props;
  const [filter, setFilter] = useState('');
 
  return (
    <> 
    <br></br>
        <Col xs={4} md={4}>
            <InputGroup className="mb-3">
              <InputGroup.Text><FaSearch/></InputGroup.Text>
              <Form.Control type="text" placeholder="Search" onChange={event => setFilter(event.target.value)}/>
            </InputGroup>
          </Col> 
          <Col xs={2} md={2}>
            <Form.Control as="select" onChange={event => setFilter(event.target.value)}>
              <option>--Select FundType--</option>
              <option>Food</option>
              <option>Medical</option>
              <option>Advance</option>
            </Form.Control>
          </Col>
          <Col xs={1}>
            <Button style={{backgroundColor: '#18A0FB'}}>Search</Button>
          </Col>   
    </>
  );
});

export default Search;
