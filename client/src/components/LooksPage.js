import React, { Component } from "react";
import Flexbox from "flexbox-react";

import Nav from "./Nav.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ImageGallery from "./ImageGallery.js";

class LooksPage extends Component {
  render() {
    return (
      <section>
        <Flexbox className="looks-page">
          <Header />

          <Nav />

          <h2 className="component-heading">Browse our daily looks!</h2>

          <ImageGallery galleryType="api" userId={this.props.userId} />

          <Footer />
        </Flexbox>
      </section>
    );
  }
}

export default LooksPage;
