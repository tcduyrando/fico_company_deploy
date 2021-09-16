/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {NavLink, Link } from 'react-router-dom';
import {Row,Col,Container,Image} from 'react-bootstrap';

import AddFundraiser from '../Fundraiser/Add_Fundraiser';
import ProjectPage from '../ProjectPage/ProjectPage';
import UserList from '../UserPage/UserList'
import SwitchAdmin from '../UserPage/SwitchToAdmin'
import UpdateFundraiser from '../Fundraiser/Update_Fundraiser';
import NavBarAdmin from './NavBarAdmin';

export default class Admin extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        admin: [],
        token:'',
        id:"",
        name: '',
        email: '',
        history: "",
        isAuthenticated: null
      };
  }
   fetchData(){    
       fetch(`/api/user/`+ this.state.id,
       {
        headers: { 'x-access-token': this.state.token}
      })
            .then(response => response.json())
            .then(json =>this.setState({ admin: json }))
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
   logout(event){
		event.preventDefault();
        window.sessionStorage.setItem("isAuthenticated", false);
        this.setState({isAuthenticated: window.sessionStorage.getItem('authenticated')})
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("id");
        this.props.history.push('/login')
    
	}
render(){
    return(
        <>
        <NavBarAdmin/>
           <Container>
              <Row>
                 <Col md={3}>
                    <div className="osahan-account-page-left shadow-sm bg-white h-100">
                       <div className="border-bottom p-4">
                          <div className="osahan-user text-center">
                             <div className="osahan-user-media">
                                <Image className="mb-3 rounded-pill shadow-sm mt-1" src="https://www.kindpng.com/picc/m/699-6997452_administrator-network-icons-system-avatar-computer-transparent-admin.png" alt="" />
                                <div className="osahan-user-media-body">
                                   <h6 className="mb-2">{this.state.admin.name}</h6>
                                   <p>{this.state.admin.email}</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/admin/projects">List Fundraisers</NavLink>
                          </li>
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/admin/addfundraiser">Add Fundraiser</NavLink>
                          </li>
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/admin/userslist"> List Users/Admins</NavLink>
                          </li>
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/admin/approveadmin">Approve Admin authorization</NavLink>
                          </li>
                       </ul>
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                       <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active"  to="/login" onClick={this.logout.bind(this)}> Log out</NavLink>
                          </li>
                       </ul>
                    </div>
                 </Col>
                 <Col md={9}>
                  <Switch>
                  <Route path="/admin/addfundraiser" exact component={AddFundraiser}/>
                    <Route path="/admin/projects" exact component={ProjectPage} />
                    <Route path="/admin/userslist" exact component={UserList} />
                    <Route path="/admin/approveadmin" exact component={SwitchAdmin} />
                    <Route path="/admin//updateFundraiser/:id" exact component={UpdateFundraiser} />
                  </Switch>
                 </Col>
              </Row>
           </Container>
    		</>
    	);
    }
}
    
        
                                        
                            