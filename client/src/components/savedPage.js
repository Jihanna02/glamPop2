import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import NavBar from './navBar.js';
import Header from './Header.js';
import FilterBar from './filterBar.js';
import FooterBar from './footerBar.js';

import Gallery from './gallery.js';

class lookPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      filter: "all-looks",

    };
    
  }

  updateThisFilter = (text) => {

    this.setState({filter: text}, function () {
      
    });

    }

  render() {

    return (
      <section>
        <Flexbox className="looks-page">

          <Header />

          <NavBar />

          <h2 className="component-heading">Review your saved looks.</h2>
          <FilterBar update={this.updateThisFilter} />

          <Gallery galleryType="database" userId={this.props.userId} filter={this.state.filter}/>

          <FooterBar />
          
        </Flexbox>
      </section>
    );
  }
}

export default lookPage;