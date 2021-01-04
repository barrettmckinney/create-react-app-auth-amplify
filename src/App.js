import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

import { BrowserRouter as Router, useLocation } from "react-router-dom";

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
              <div>
               <img src = "src/images/fireworkmockup.jpg"/>
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
