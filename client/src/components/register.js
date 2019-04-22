import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Flexbox from 'flexbox-react';
import axios from 'axios';

import '../css/Modal.css';


function Welcome(props) {
  return(
    <div className={props.className}>
      <h2>Welcome to Fleekshow!</h2>
      <h3>Please log into your account.</h3>
    </div>
    )
}

function RegError(props){
  return(
    <div className={props.className}>
      <h2>Account not created</h2>
      <h3>Click the link below to try again.</h3>
      <Link to='/register'>back</Link>
    </div>
  )
}

class RegForm extends Component {

  constructor(props){
		super(props);
		this.state = {

    };
  }

  handleChange = (event) => {

    const {name,value} = event.target
    this.setState({[name]:value.toUpperCase()});

  }

  handleSubmit = (event) => {

    event.preventDefault();
    
    axios.post('/api/users', this.state)
    .then((res) => {

      this.props.updateState("visible","hidden","hidden");
    
    })
    .catch((err) => {

      this.setState({
        welcomeClass: "hidden",
        errorClass: "",
        formClass: "hidden" 
      });

    });

  }

  render(){

    return(
      <div className="registration-page">
      <div className={this.props.className}>
        <h1>Create your FleekShow account</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="register-form" type="text" name="first_name"  placeholder="First Name" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="last_name"  placeholder="Last Name" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="username"  placeholder="Username" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="email"  placeholder="Email" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="password" name="password"  placeholder="Password" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="submit" value="Submit" />
          </form>
      </div>
      </div>
  )

  }
}

class Register extends Component {

  constructor(props){
		super(props);
		this.state = {
      welcomeClass: "hidden",
      errorClass: "hidden",
      formClass: ""
    };

  }


  updateThisState = (welcome,error,form) => {

    this.setState({welcomeClass: welcome,
    errorClass: error,
    formClass: form }, function () {
      console.log(this.state);
    });

    }

  render() {

    return (

      <Flexbox>
        <div className="registration-page">
          <Welcome className={this.state.welcomeClass}/>
          <RegError className={this.state.errorClass}/>
          <RegForm className={this.state.formClass} updateState={this.updateThisState} />
        </div>

      </Flexbox>

    );
  }
}

export default Register;
