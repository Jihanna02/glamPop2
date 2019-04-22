import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, 
  Switch } from "react-router-dom";

import Landing from './components/LandingPage.js';
import Register from './components/Register.js';
import LookPage from './components/LookPage.js';
import SavedPage from './components/SavedPage.js';

import './css/App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      userId: ""

    };

  }

  updateThisId = (text) => {

    this.setState({userId: text}, function () {

    });

    }

  render() {

    return (
      <div className="App">

        <Router>

          <div>

            <Switch>

              {/* component routes with username state passed down as props */}

              <Route 
              exact path='/' 
              render={(props) => <Landing {...props} userId={this.state.userId} updateToId={this.updateThisId}/>}
              />

              <Route 
              path='/register' 
              render={(props) => <Register {...props} userId={this.state.userId} />}
              />



              <Route 
              path='/looks' 
              render={(props) => <LookPage {...props} userId={this.state.userId} />}
              />

              <Route 
              path='/saved' 
              render={(props) => <SavedPage {...props} userId={this.state.userId} />}
              />

            </Switch>

          </div>

        </Router>

      </div>
    );
  }
}

export default App;


