import React from 'react';


class App extends Component {
    render() {
      const nav = [
        {id: 'home', label: 'Home', path: '/'},
        {id: 'about', label: 'About', path: '/about'},
        {id: 'discover', label: 'Discover', path: '/discover'},
      ]
      return (
        
        <SlideMenu
          active={this.state.slideMenuActive}
          nav={nav}
          reactRouter={true}
          closeMenu={() => this.setState({slideMenuActive: false})}>
        <div>
          <div className="App">
            <header className="App-header">
              <div className="App-logo">
              0DEGREES
              </div>
              <p className="fade-in">  
                {/* The future of legal services, <b>for everyone</b> */}
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
        </SlideMenu>
      );
    }
  }
  
  export default App;

