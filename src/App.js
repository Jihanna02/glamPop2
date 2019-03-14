import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from "react-router-dom";
import Flexbox from 'flexbox-react';

import './App.css';

import LandingPage from './components/landingPage.js';
import NavBar from './components/navBar.js';
import LookBar from './components/lookPage.js';
import SavedBar from './components/savedBar.js';
import FooterBar from './components/footerBar.js';
import Api from './components/Api.js';
import Test from './components/test.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Router>

          <div>

            <Switch>
              <Route exact path='/' component={LandingPage}/>
              <Route path='/looks' component={LookBar}/>
              <Route path='/saved' component={SavedBar}/> 
              <Route path='/api' component={Api}/>  
              <Route path='/test' component={Test}/>             

            </Switch>

          </div>

        </Router>

      </div>
    );
  }
}

export default App;


