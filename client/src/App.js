import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, 
  Switch } from "react-router-dom";

import Landing from './components/LandingPage.js';
import Register from './components/register.js';
import lookPage from './components/lookPage.js';
import savedPage from './components/savedPage.js';

import './css/App.css';

//actual app starts here


class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      userId: "testing",

    };
  }

  componentDidMount(){
  

  }

  render() {
    return (
      <div className="App">

        <Router>

          <div>

            <Switch>

              <Route exact path='/' component={Landing}/>
              <Route path='/register' component={Register}/>
              <Route path='/looks' component={lookPage}/> 
              <Route path='/saved' component={savedPage}/>       

              {/*

              component routes with username state passed down as props

              <Route 
              path='/' 
              render={(props) => <Landing {...props} userId={this.state.userId} />}
              />

              <Route 
              path='/register' 
              render={(props) => <Register {...props} userId={this.state.userId} />}
              />

              <Route 
              path='/register' 
              render={(props) => <Main {...props} userId={this.state.userId} />}
              />

             */}
              

            </Switch>

          </div>

        </Router>

      </div>
    );
  }
}

export default App;


