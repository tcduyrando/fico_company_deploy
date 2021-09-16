import React from "react";
import {useState, useEffect, useCallback } from 'react';
import {useParams, useLocation, Link } from 'react-router-dom';
import { Button, Form, InputGroup, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import { FaSearch } from 'react-icons/fa';
import { RiLayoutGridFill } from 'react-icons/ri'
import { IoList } from 'react-icons/io5'

import GridCard from "./GridCard";
import ListCard from "./ListCard";
import Search from '../ProjectPage/Search';

export default function BrowseFundraisers() {
const [data, setData] = useState([]);
const endPoint = "/api/fundraiser";
const filterProject = useCallback((project) => {
  setData(project);
}, []);

//get data from api
const load = (id) => {
  fetch(endPoint)
    .then(response => response.json())
    .then(data =>
      {   data.filter(project => project._id !== id)
          setData(data)
      }      
      );
}

//load data automatically
useEffect(() => {
   load()
 }, [filterProject])

  const [view, setView] = useState('gridView');

  const setListView = () => {
    setView('listView')
  }

  const setGridView = () => {
    setView('gridView')
  }

  const left = {
    textAlign: 'left',
  }
  
  return (
    <div style={{backgroundColor:'#ececec'}}>
      <div style={{backgroundColor:'#9abaff'}}>
        <br/>
        <div className="row" style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
          <br/>
          <h1 style={left}>Browse fundraisers</h1>
          <br/><br/><br/>
          <h4 style={left}>People around the world are raising money 
            for what they are passionate about.</h4>
          <br/>
        </div>
        <br/>
      </div>
      <br/>
      <div className="row" style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
        <Row>
        <Search onloadedProjects={filterProject}/>
          <Col xs={5} md={5}>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={setListView} ><IoList/> List</Button>
              <Button variant="secondary" onClick={setGridView}><RiLayoutGridFill/> Grid</Button>
            </div>
          </Col>
        </Row>
      </div>
      {
        (view === "gridView" ? 
          <div className="row" style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
            <Container>
              <Grid container spacing={6} >
                <Grid item xs={12}>
                  <GridCard  fundraiser={data}/>
                </Grid>
              </Grid>
            </Container>
          </div>
        : <div className="row" style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
            <Container>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <ListCard projects={data}/>
                </Grid>
              </Grid>
            </Container>
          </div>
        )
      }
      <br></br>
    </div>
      
  )
}

