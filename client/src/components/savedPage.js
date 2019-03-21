import React, * as react from 'react';
import Flexbox from 'flexbox-react';

import NavBar from './navBar.js';
import FilterBar from './filterBar.js';
import FooterBar from './footerBar.js';

import Gallery from './gallery.js';

class lookPage extends react.Component {
  render() {
    return (
      <section>
        <Flexbox className="looks-page">

          <NavBar />

          <h2 className="component-heading">Review your saved looks.</h2>
          <FilterBar />

          <Gallery galleryType="database" />

          <FooterBar />
          
        </Flexbox>
      </section>
    );
  }
}

export default lookPage;