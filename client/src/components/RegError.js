import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Flexbox from 'flexbox-react';

import Register from './Register.js';

import '../css/Modal.css';

import '../css/Modal.css';


class RegError extends Component {

  render() {

    return (

        <div>
            <h2>Account not created</h2>
            <h3>Click the link below to try again.</h3>
            <Link to='/register'>back</Link>
        </div>

    );
  }
}

export default RegError;
