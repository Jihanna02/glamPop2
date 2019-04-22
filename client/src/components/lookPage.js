import React, { Component } from "react";
import Flexbox from "flexbox-react";

import NavBar from "./navBar.js";
import Header from "./Header.js";

import FooterBar from "./footerBar.js";

import Gallery from "./gallery.js";

class lookPage extends Component {
  render() {
    return (
      <section>
        <Flexbox className="looks-page">
          <Header />

          <NavBar />

          <h2 className="component-heading">Browse our daily looks!</h2>

          <Gallery galleryType="api" userId={this.props.userId} />

          <FooterBar />
        </Flexbox>
      </section>
    );
  }
}

export default lookPage;
