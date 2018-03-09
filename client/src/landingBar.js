import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import request from 'superagent';

// import Bcrypt from 'bcrypt';
import Flexbox from 'flexbox-react';
import Modal from './modal.js';

import Register from './register.js';
import FooterBar from './footerBar.js';

import './landingBar.css';
import header from './images/header.png';

class LandingBar extends Component {
    state = {
            showModal:'none',
            content:''
        }

    _closeModal = () => {
        this.setState({showModal:'none'})
    }

    handleChange = (event) => {
      const target = event.target.value;

      const {name,value} = event.target
      this.setState({[name]:value});

    }

      handleSubmit = (event) => {
        const loginObject = this.state;

       request
        .get('/api/users/'+loginObject.username)
        .end((err, res) => {
          if(err){
            return err;
          } else if (res){

            if(loginObject.password === res.body[0].password){
              
              window.sessionStorage.setItem(userID, res.body[0]._id);
              
              const userID = window.sessionStorage.getItem(userID);

              console.log(userID);

              //REDIRECT TO VANITY PAGE!
               

            } else {
              alert("incorrect password. please try again");
            }
          }
        });

        event.preventDefault();
      }

  render() {
    return (
      <section className="landing">
          <Flexbox className="center">

            <img src={header} alt="Logo Image" className="landingImg" />
            <h1><span className="logo">GlamPop!</span></h1>
            <h2>Your one-stop shop for fabulousity.</h2>

            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="Username" onChange={(e) => this.handleChange(e)} />
              <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} />
              <Link to='/about'><input type="submit" value="Submit" /></Link>
            </form>

            <h4>Not a member?<a id="register-btn" className="looks-bar-btn" onClick={() => {
                this.setState({showModal:'block',content:<Register /> })
            }}>Sign-Up Here!</a></h4> 

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

export default LandingBar;