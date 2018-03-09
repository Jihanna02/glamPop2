import React, { Component } from 'react';
// import { Fetch } from 'react-request';
import Flexbox from 'flexbox-react';


import NavBar from './navBar.js';
import FilterBar from './filterBar.js';
import FooterBar from './footerBar.js';

import Api from './Api.js';
// import Gallery from './Gallery.js';

class lookBar extends Component {

  render() {
    return (
        <section >
            <NavBar />
            <h2 class="component-heading" >Browse our latest looks!</h2>
            <Flexbox className="looks-bar">
                <Flexbox className="api-container">
                    <Api />
                </Flexbox>
            </Flexbox>
                
            <FooterBar />

        </section>
    );
  }
}

export default lookBar;
