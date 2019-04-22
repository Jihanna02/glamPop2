import React, { Component } from "react";
import Flexbox from "flexbox-react";

import Nav from "./Nav.js";
import Header from "./Header.js";
import FilterBar from "./FilterBar.js";
import Footer from "./Footer.js";
import Gallery from "./Gallery.js";

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
          <FilterBar update={this.updateThisFilter} />

          <Gallery
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
