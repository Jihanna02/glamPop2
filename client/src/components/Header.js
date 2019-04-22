import React, { Component } from 'react';
import header from '../images/header.png';

class Header extends Component {
  render() {
    return (

        <div className="header">
            <img src={header} alt="header" className="headerImg" />
            <span className="logo">FleekShow</span>
        </div>

    );
  }
}

export default Header;