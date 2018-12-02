import React, { Component } from 'react';
import './App.css';
import Projects from './Projects'
import Avatar from './Avatar';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

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
        <Roll>
          <div className="App-team-header">
            TEAM
          </div>
        </Roll>
        <Zoom>
          <Avatar/>
        </Zoom>
  
      </div>
      </div>
    );
  }
}

export default App;
