import React, { Component } from 'react';
import './App.css';
import Projects from './Projects'
import Avatar from './Avatar';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import SlideMenu from 'react-slide-menu'

class App extends Component {

  
  state = {
    slideMenuActive: false
  }


  render() {
    console.log(this.state)
    const nav = [
      {id: 'home', label: 'Home', path: '/'},
      {id: 'about', label: 'About', path: '/about'},
      {id: 'discover', label: 'Discover', path: '/discover'},
    ]
    return (

      // <SlideMenu
      //   active={this.state.slideMenuActive}
      //   nav={nav}
      //   closeMenu={() => this.setState({slideMenuActive: false})}>
      <div>
        <div className="App">
          <header className="App-header">
            <div className="App-logo" onClick={() => {this.setState({slideMenuActive: !this.state.slideMenuActive})}}>
            0DEGREES
            </div>
            <p className="fade-in">  
              The future of legal services, <b>for everyone</b>
              {/* Creating the future of legal markets */}
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
      // </SlideMenu>
    );
  }
}

export default App;
