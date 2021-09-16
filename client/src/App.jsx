import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-select2-wrapper/css/select2.css';
import './App.css';

import Login from "./components/SignPage/Login";
import Admin from './components/AdminPage/Admin';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './common/Navbar';
import Footer from './common/footer';
import NotFound from './common/NotFound';
import Register from './components/SignPage/Register';
import Home from './components/Homepage/Homepage.jsx';
import Fundraiser from './components/Fundraiser/BrowseFundraisers';
import ProjectForm from './components/ProjectPage/ProjectForm';
import UserProfile from './components/UserPage/UserProfile';
import DetailFundraiser from './components/Fundraiser/Detail_Fundraiser';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {isAuthenticated: false}
  }

  componentDidMount(){
    if (window.sessionStorage.getItem("isAuthenticated") === null) {
      window.sessionStorage.setItem('isAuthenticated', false)
    }
    this.setState({isAuthenticated: window.sessionStorage.getItem('isAuthenticated')})
  }
  render(){
    
  return (
    <div>
      
  
      {
            (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register' && this.props.location.pathname!=='/admin/projects' && 
            this.props.location.pathname!=='/admin/addfundraiser' && this.props.location.pathname!=='/admin/userslist' && this.props.location.pathname!=='/admin/approveadmin')    ? <Navbar/>:''
          } 
              <Switch>
                {/* <Route exact path="/fundraisers" component={Fundraisers}/> */}
                <Route exact path="/" component={Home}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/notfound" exact component={NotFound} />
                <Route path="/login" exact component={Login}/>
                <Route path="/admin"  component={Admin}/>
                <Route path="/register" component={Register}/>
                <Route path="/aboutus" component={AboutUs}/>
                <Route path="/fundraiser" component={Fundraiser}/>
                <Route path="/fundraisers/:id" exact component={DetailFundraiser}/>
                <Route path="/projectform" component={ProjectForm} />
                <Route path="/userp" component={UserProfile}/>
              </Switch>
          <Footer />
      
    </div>
  );
  }
}

