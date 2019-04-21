import React, * as react from 'react';
import Flexbox from 'flexbox-react';

import NavBar from './navBar.js';
import FooterBar from './footerBar.js';

import Gallery from './gallery.js';

class lookPage extends Component {
  render() {

    return (
      <section>
        <Flexbox className="looks-page">

          <NavBar />

          <h2 className="component-heading">Browse our daily looks!</h2>

          <Gallery galleryType="api" />

          <FooterBar />
          
        </Flexbox>
      </section>
    );
  }
}

export default lookPage;