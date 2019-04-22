import React, { Component } from "react";
import Flexbox from "flexbox-react";

import Nav from "./Nav.js";
import Header from "./Header.js";
import Filter from "./Filter.js";
import Footer from "./Footer.js";
import ImageGallery from "./ImageGallery.js";

class SavedLooksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "all-looks"
    };
  }

  updateThisFilter = text => {
    this.setState({ filter: text }, function() {});
  };

  render() {
    return (
      <section>
        <Flexbox className="looks-page">
          <Header />

          <Nav />

          <h2 className="component-heading">Review your saved looks.</h2>
          <Filter update={this.updateThisFilter} />

          <ImageGallery
            galleryType="database"
            userId={this.props.userId}
            filter={this.state.filter}
          />

          <Footer />
        </Flexbox>
      </section>
    );
  }
}

export default SavedLooksPage;
