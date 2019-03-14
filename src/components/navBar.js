import React, { Component } from 'react';
import header from './images/header.png';
import { BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from "react-router-dom";
 
class NavBar extends Component {
  render() {
    return (

      <nav className="navBar">
          <ul>
            <li className="navLinks"><Link to='/about'>About Us</Link></li>
            <li className="navLinks"><Link to='/looks'>Daily Looks</Link></li>
            <li className="navLinks"><Link to='/vanity'>Your Vanity</Link></li>
            <li className="navLinks"><Link to='/'>Logout</Link></li>
            
          </ul>

          <div className="">
            <img src={header} alt="header" className="headerImg" />
            <h1 className="center"><span className="logo">GlamPop!</span></h1>
          </div>
      </nav>

    );
  }
}

export default NavBar;