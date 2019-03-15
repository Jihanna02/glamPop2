import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import NavBar from './navBar.js';
import FilterBar from './filterBar.js';
import FooterBar from './footerBar.js';

import edit from './images/icon-edit.svg';
import iconDelete from './images/icon-delete.svg';
import look from './images/look.jpg';

import Gallery from './gallery.js';

class savedPage extends Component {
  render() {
    return (
      <section>
      	<Flexbox className="looks-page">

          <NavBar />

          <h2 className="component-heading">My Saved Looks</h2>

          <FilterBar />

          <Gallery />

          <FooterBar />
          
      	</Flexbox>
      </section>
    );
  }
}

export default savedPage;