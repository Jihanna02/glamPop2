import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (

        <nav className="navBar">
          <ul>
            <li className="navLinks"><Link to='/looks'>Daily Looks</Link></li>
            <li className="navLinks"><Link to='/saved'>Saved Looks</Link></li>
            <li className="navLinks"><Link to='/'>Logout</Link></li>
          </ul> 
        </nav>

    );
  }
}

export default NavBar;