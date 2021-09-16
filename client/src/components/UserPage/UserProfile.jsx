import React from "react";
import {useState,useEffect } from 'react';
import {useParams,useLocation } from 'react-router-dom';
import {Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditProfileModal from "./EditProfileModal";

export default class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          user: [],
          id:"",
          name: '',
          email: '',
          dob: '',
          location: '',
          password: '',
          token: '',
          profilePicture: null,
          isUpdate: false,
          isAuthenticated: false,
          showEditProfile: false
        };
      }
     fetchData(){    
       fetch(`/api/user/`+ this.state.id,
       {
        headers: { 'x-access-token': this.state.token}
      })
            .then(response => response.json())
            .then(json =>this.setState({ user: json }))
            .catch(err => console.log(err))                     
        }

    componentDidMount() {
    this.fetchData()
  }

    componentWillMount(){
      this.setState({isAuthenticated: window.sessionStorage.getItem('isAuthenticated')}, () => console.log(this.state.isAuthenticated))
      this.setState({token: window.sessionStorage.getItem('token')})
      this.setState({id: window.sessionStorage.getItem('id')})
  }
    hideEditProfile = () => this.setState({ showEditProfile: false });
  render(){
  return(
    <div>
      <EditProfileModal show={this.state.showEditProfile} onHide={this.hideEditProfile}/>
      <div style={{backgroundColor: '#f1f1f1'}}>
        <br/><br/><br/>
        <div className="row" style={{ width: '50%', margin: 'auto', marginBottom: '25px', backgroundColor: 'white' }}>
          <Container>
            <div className="row" style={{ width: '50%', margin: 'auto', marginBottom: '25px', marginTop: '50px', backgroundColor: 'white' }}>
              <Card>
                  <CardMedia>
                    <img src={'' + this.state.user.profilePicture} alt="Fimage" style={{width: '100%'}}/>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
                      <b>{this.state.user.name}</b>
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'center'}}>
                    DATE OF BIRTH: <span style={{color: 'black'}}>{this.state.user.dob}</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'center'}}>
                    LOCATION: <span style={{color: 'black'}}>{this.state.user.location}</span>
                    </Typography>
                  </CardContent>
                <CardActions style={{float: 'right'}}>                 
                </CardActions>           
              </Card>
            </div>
          </Container>
          <br/><br/><br/>
          <Button to="#" onClick={() => this.setState({ showEditProfile: true })} style={{width: '125px', margin: 'auto', marginTop: '30px', marginBottom: '30px', backgroundColor: '#18A0FB'}}>
            Edit Profile
          </Button>
        </div>
        <br/><br/><br/>
        
      </div>
    </div>
    // <>
    //     {post}
    // </>
  )
 }
}