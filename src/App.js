import React, { Component } from 'react';
import './App.css';
import Projects from './Projects'
import Avatar from './Avatar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <div className="App-logo">
            0DEGREES
            </div>
            <p className="fade-in">
              The future of legal services, <b>for everyone</b>
            </p>
            
          </header>
        </div>
      <div className="App-projects">
        <Projects/>
      </div>
      <div className="App-team">
        TEAM
        <Avatar/>
      </div>
      </div>
    );
  }
}

export default App;
