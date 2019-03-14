import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import NavBar from './navBar.js';
import FilterBar from './filterBar.js';
import FooterBar from './footerBar.js';

import edit from './images/icon-edit.svg';
import iconDelete from './images/icon-delete.svg';
import look from './images/look.jpg';

import Gallery from './gallery.js';

class savedBar extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <h2 class="component-heading">My Vanity Images</h2>
        <FilterBar />
      	<Flexbox className="vanityBar">
          <Flexbox className="api-container">
              <Gallery />
          </Flexbox>
      	</Flexbox>
        <FooterBar />
      </section>
    );
  }
}

export default savedBar;