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
            Welcome! Manage your virtual desktops
              <div>
               <a href="https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?templateURL=https://awsfirework.s3-us-west-2.amazonaws.com/CreateNewWorkSpace.yaml&stackName=New-Workspace">
                  <img alt="Create New Workspaces" src="/src/images/workspaces.png" width="100%" height="100%">
              </a>
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
