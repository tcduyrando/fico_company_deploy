import React, { Component } from "react";
import "./AddFundraiser.css";
import './w3style.css';
import axios from 'axios';
import PageTitle from '../../common/PageTitle';

const url = "/api/fundraiser";

class AddFundraiser extends Component {
  constructor(props){
    super(props);
    this.state = {
      fundraiser: [],
      title: '',
      address: '',
      category: '',
      name: '',
      information: '',
      donate: '',
      image: null,
      isAuthenticated: false,
      token: ''
    };
  }
 

  fetchData(){    
    fetch("/api/fundraiser")
        .then(response => response.json())
        .then(json => this.setState({fundraiser: json}))                  
  }

  componentDidMount(){
    this.fetchData();
  }
  componentWillMount(){
    this.setState({isAuthenticated: window.sessionStorage.getItem('isAuthenticated')}, () => console.log(this.state.isAuthenticated))
    this.setState({token: window.sessionStorage.getItem('token')})
}
  handleChange(e) {
    e.preventDefault();
    var obj = {}
    obj[e.target.name] = e.target.value
    this.setState(
      obj)
}
  onImageChange = event => {
    this.setState({
      image: window.URL.createObjectURL(event.target.files[0])
  })
  };

  saveFundraiser(e){
    let formData = new FormData();
    let image = document.querySelector('#image');
    formData.append("title", this.state.title);
    formData.append("fundType", this.state.fundType);
    formData.append("name", this.state.name)
    formData.append("address", this.state.address)
    formData.append("donaterequire", this.state.donaterequire)
    formData.append("information", this.state.information)
    formData.append("image", image.files[0])
    e.preventDefault();
    axios({
        url: url,
        method: 'POST',
        headers: {
          'x-access-token': this.state.token,
          'Content-Type': 'multipart/form-data',
        },
        data: formData
      })   
      .then(() => {
        alert('create Fundraiser successfully')
        setTimeout(this.fetchData(), 10000)
        window.location.reload()


    })
    .catch(error => {
        if (error.response) {
            console.log(error.responderEnd);
        }
    });
  }
  render() {
    return (
     <>
     <PageTitle 
	    			title="Add a post"
	    		/>
    {/* //Page Container */}
      <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{maxWidth:1400}}>

        {/* The Form  */}
        <form>
            <div className="w3-row-padding">
            {/* Left Colum */}
            <div className="w3-third">
                <div className=" w3-container w3-white w3-text-grey w3-card-4"> 
                <img src='./img/food.jpg' alt="" style={{width: '100%', background:'cover'}} />
                          {/* Input Image */}
                          <input type="file" name="image" id="image"
                          onChange={this.onImageChange.bind(this)} />                   
                      {/* Input title */}
                    <div className="input-section">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            autoComplete="off" 
                            required
                            value={this.state.title}
                            onChange={this.handleChange.bind(this)}
                            />

                            <label className="label-name">
                              <span className="content-name">
                              Title
                              </span>
                            </label>
                      </div>  
                      <div className="w3-container w3-padding">
                            <div className="col-40">
                                <label >
                                  Fund of Type
                                </label>
                              </div>
                              <div className="col-60">
                                <select  id="fundType" name="fundType" 
                                required
                                value={this.state.fundType}
                                onChange={this.handleChange.bind(this)}>
                                    <option>Medical</option>
                                    <option>Food</option>
                                    <option>Advance</option>
                                </select>
                              </div>
                        </div>
                  </div>

                  <div className=" w3-container w3-card w3-white w3-margin-top">
                    <div className="textarea-section">
                        <textarea
                          type="text"
                          name="name"
                          placeholder="Name of the person in need of aid"
                          autoComplete="off" required
                          id="name"
                          value={this.state.name}
                          onChange={this.handleChange.bind(this)}
                          />
                        <label  className="label-name">    
                            <span className="content-name">
                              <i className="fa fa-pencil-square-o w3-padding"></i>
                              Recipient
                            </span>
                        </label>
                    </div>
                  </div>
                  <div className=" w3-container w3-card w3-white w3-margin-top">
                    <div className="textarea-section">
                        <textarea
                          type="text"
                          name="donaterequire"
                          placeholder="10.000.000"
                          autoComplete="off" required
                          id="donaterequire"
                          value={this.state.donaterequire}
                          onChange={this.handleChange.bind(this)}
                          />
                        <label  className="label-name">    
                            <span className="content-name">
                              <i className="fa fa-pencil-square-o w3-padding"></i>
                              Fundraising goals
                            </span>
                        </label>
                    </div>
                  </div>
                  <div className=" w3-container w3-card w3-white w3-margin-top">
                  <div className="textarea-section" style={{height: '0px'}}>
                    <label className="label-name"><span className="content-name">
                      <i className="fa fa-pencil-square-o w3-padding"></i>
                      Select Image</span> 
                      </label>
                      </div>       
                    </div> 
            </div>

            {/* Right Colum */}
            <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <div className="textarea-section">
                          <textarea
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Please Write address here..."
                            autoComplete="off" required
                            value={this.state.address}
                            onChange={this.handleChange.bind(this)}
                            />
                          <label className="label-name" >    
                              <span className="content-name">
                                <i className="fa fa-shopping-basket w3-padding"></i>
                                Address
                              </span>
                          </label>
                      </div>
                </div>
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <div className="textarea-section" style={{height: 500}}>
                          <textarea
                            type="text"
                            name="information"
                            placeholder="Please Write The Info here..."
                            autoComplete="off" required
                            value={this.state.information}
                            id="information"
                            onChange={this.handleChange.bind(this)}
                            />
                          <label  className="label-name" style={{bottom:'90%'}}>    
                              <span className="content-name">
                                <i className="fa fa-glass w3-padding"></i>
                                Information 
                              </span>
                          </label>
                      </div>
                      <div className="w3-padding-16">
                          <button type="submit" value="submit" className="w3-button w3-black" onClick={this.saveFundraiser.bind(this)}>Save Fundraiser</button>
                      </div>
                  </div>
              </div>
            </div>
        </form>
        
       </div>
    </div>
    </>
    );
  }
}


export default AddFundraiser;
