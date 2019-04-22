import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/LandingPage.js";
import RegistrationPage from "./components/RegistrationPage.js";
import LooksPage from "./components/LooksPage.js";
import SavedLooksPage from "./components/SavedLooksPage.js";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ""
    };
  }

  updateThisId = text => {
    this.setState({ userId: text }, function() {});
  };

  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Landing
                  {...props}
                  userId={this.state.userId}
                  updateToId={this.updateThisId}
                />
              )}
            />

            <Route
              path="/register"
              render={props => (
                <RegistrationPage {...props} userId={this.state.userId} />
              )}
            />

            <Route
              path="/looks"
              render={props => (
                <LooksPage {...props} userId={this.state.userId} />
              )}
            />

            <Route
              path="/saved"
              render={props => (
                <SavedLooksPage {...props} userId={this.state.userId} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
