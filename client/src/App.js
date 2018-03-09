import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from "react-router-dom";
import Flexbox from 'flexbox-react';

import './App.css';

import LandingBar from './landingBar.js';
import NavBar from './navBar.js';
import LookBar from './lookBar.js';
import About from './About.js';
import VanityBar from './vanityBar.js';
import FooterBar from './footerBar.js';

class App extends Component {

  render() {
    return (
      <div className="app">

        <Switch>
          <Route exact path='/' component={LandingBar}/>
          <Route path='/about' component={About}/>
          <Route path='/looks' component={LookBar}/>
          <Route path='/vanity' component={VanityBar}/>
        </Switch>

      </div>
    );
  }
}

export default App;