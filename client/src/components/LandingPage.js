//npm-packages
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import axios from 'axios';
import Flexbox from 'flexbox-react';

//components
import Modal from './modal.js';
import Register from './register.js';
import FooterBar from './footerBar.js';

//css
import '../css/landingPage.css';

//images
import header from '../images/header.png';

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
      const target = event.target.value;
      const {name,value} = event.target
      this.setState({[name]:value});

    }

    handleSubmit = (event) => {

      event.preventDefault();

      axios
      .get('/api/users/' + this.state.username.toUpperCase())
      .end((err, res) => {
        if(err){
          alert("username not found");

          console.log(err);

        } else if (res){
          let userCheck = res.body.length > 0;

            if (userCheck === true) {
              let loggedIn = res.body[0].password.toUpperCase() === this.state.password.toUpperCase();

              if ( loggedIn === true ) { 
                sessionStorage.setItem("idNumber", res.body[0]._id);
    

                let idNumber = sessionStorage.getItem("idNumber");

                return this.props.history.push("/looks");

               } else {

                alert("wrong password");
               }

            } else {
              alert("user not found");

            }
          
        }

      });    

    }

  render() {
    return (
      <section className="container">
          <Flexbox flexDirection="column" className="landing">

            <img src={header} alt="Logo Image" className="landingImg" />
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