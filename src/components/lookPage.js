import React, { Component } from 'react';
// import { Fetch } from 'react-request';
import Flexbox from 'flexbox-react';


import NavBar from './navBar.js';
import FilterBar from './filterBar.js';
import FooterBar from './footerBar.js';

import Api from './api.js';

class lookBar extends Component {

  render() {
    return (
        <Flexbox className="looks-page">
            <NavBar />
            <h2 class="component-heading" >Browse our latest looks!</h2>
            <Api />    
            <FooterBar />
        </Flexbox>
    );
  }
}

export default lookBar;
