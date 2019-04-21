import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import axios from 'axios';

import '../css/Modal.css';


class Register extends Component {

  handleChange = (event) => {

    const {name,value} = event.target
    this.setState({[name]:value.toUpperCase()});

  }

  handleSubmit = (event) => {

    event.preventDefault();
    
    axios.post('/api/users', this.state)
    .then((res) => {
      alert("Account created. Welcome to Fleekshow!");

    })
    .catch((err) => {
      alert("Account not created. Please try again.");
      console.log(err);

    });

  }


  render() {

    return (

      <Flexbox className="registration-page">
      <h1>Create your FleekShow account</h1>
        <form onSubmit={this.handleSubmit}>

          <input className="register-form" type="text" name="first_name"  placeholder="First Name" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="last_name"  placeholder="Last Name" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="username"  placeholder="Username" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="email"  placeholder="Email" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="password" name="password"  placeholder="Password" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="submit" value="Submit" />

       </form>

      </Flexbox>

    );
  }
}

export default Register;
