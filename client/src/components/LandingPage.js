
import React, { Component } from 'react';

import axios from 'axios';
import Flexbox from 'flexbox-react';

import Modal from './modal.js';
import Register from './Register.js';
import FooterBar from './footerBar.js';

import '../css/landingPage.css';

import header from '../images/header.png';

function PasswordError() {
  return(
    <div className="registration-page">
      <h3>This password is incorrect. Please try again.</h3>
    </div>
    )
}

function UserError(){
  return(
    <div className="registration-page">
      <h3>This username is incorrect. Please try again.</h3>
    </div>
  )
}


class LandingPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        showModal:'none',
        content:''
      };
    }

    _closeModal = () => {
        this.setState({showModal:'none'})
    }

    handleChange = (event) => {

      const {name,value} = event.target
      this.setState({[name]:value});

    }

    handleSubmit = (event) => {

      event.preventDefault();

      axios.get(`/api/users/${this.state.username.toUpperCase()}`)
      .then((res) => {
        let userCheck = res.data.length > 0;

              if (userCheck === true) {
                let loggedIn = res.data[0].password.toUpperCase() === this.state.password.toUpperCase();
  
                if ( loggedIn === true ) { 

                  this.props.updateToId(res.data[0]._id);
                  
                  return this.props.history.push("/looks");
  
                 } else {
  
                  this.setState({showModal:'block',content:<PasswordError /> });
                 }
  
              } else {
                this.setState({showModal:'block',content:<UserError /> });
  
              }
            
      })
      .catch( (err) => {
        console.log(err);

        this.setState({showModal:'block',content:<UserError /> });


      });    

    }

  render() {

    return (
      <section className="container">
          <Flexbox flexDirection="column" className="landing">

            <img src={header} alt="Logo" className="landingImg" />
            <h1><span className="logo">FleekShow</span></h1>
            <h2>Your one-stop shop for today's hottest looks.</h2>

            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="Username" onChange={(e) => this.handleChange(e)} />
              <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} />
              <input type="submit" value="Submit" />
            </form>

            <h4>Not a member?<a id="register-btn" onClick={() => {
                this.setState({showModal:'block',content:<Register /> }) }}> Sign-Up Here!</a></h4> 

          </Flexbox>
                
          <FooterBar />

          <Modal 
            showModal={this.state.showModal} 
            closeModal={this._closeModal} 
            content={this.state.content}
          />
      </section>
    );
  }
}

export default LandingPage;