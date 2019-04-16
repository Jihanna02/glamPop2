import React, { Component } from 'react';
import header from '../images/header.png';
import { Link } from "react-router-dom";
 
class NavBar extends Component {
  render() {
    return (

      <nav className="navBar">
            <ul>
              <li className="navLinks"><Link to='/looks'><img src={header} alt="header" className="headerImg" /></Link></li>
              <li className="navLinks"><Link to='/looks'><span className="logo">FleekShow</span></Link></li>
              <li className="navLinks nav-right"><Link to='/'>Logout</Link></li>
              <li className="navLinks nav-right"><Link to='/saved'>Saved Looks</Link></li>
              <li className="navLinks nav-right"><Link to='/looks'>Daily Looks</Link></li>
            </ul>
      </nav>

    );
  }
}

export default NavBar;