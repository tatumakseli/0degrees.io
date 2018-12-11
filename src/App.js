import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Avatar from './Avatar';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import logo from './logo.svg';
import product from './product.png';
import kukaperii from './kukaperii.png';
import KukaperiiText from './KukaperiiText';
import down from './down.png';


class App extends Component {

  state = { isHide: false };

  hideBar = () => {
     const { isHide } = this.state

     window.scrollY > this.prev ?
     !isHide && this.setState({ isHide: true })
     :
     isHide && this.setState({ isHide: true });

     this.prev = window.scrollY;
  }

  componentDidMount(){
      window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
       window.removeEventListener('scroll', this.hideBar);
  }


  render() {
    const classHide = this.state.isHide ? 'hide' : 'show';
 
    console.log(this.state)
    const nav = [
      {id: 'home', label: 'Home', path: '/'},
      {id: 'about', label: 'About', path: '/about'},
      {id: 'discover', label: 'Discover', path: '/discover'},
    ]
    return (

      <div className="App">
          <div style={{height: '100vh'}}>
            <div className="App-logo">
                <img src={logo} alt="0 Degrees" style={{width: "15vh", paddingLeft: "3vh", paddingTop: "3vh"}}></img>
            </div>
            <header className="App-header">
              {/* <div className="App-logo" onClick={() => {this.setState({slideMenuActive: !this.state.slideMenuActive})}}> */}
              
              <p className="fade-in">  
                The future of legal services, <b>for everyone</b>
                {/* Creating the future of legal markets */}
              </p>

              <div className={`${classHide}`}>
                <img style={{bottom: '10px', position: 'absolute', height: '3vh'}} src={down} alt="-"></img>
              </div>
            </header>
            
          </div>
      <div>

      </div>
      {/* <div className="App-projects">
          <Projects/>
      </div> */}
      <Fade bottom>
      <div className="App-company">
          <p className="headi">Company</p>
          {/* <svg height="210" width="500">
            <line x1="0" y1="0" x2="500" y2="0" style={{stroke: "#5D5D5D", strokeWidth:"2", textAlign: "centered"}} />
          </svg> */}
          <p className="companytext">We are a modern technology company building superior digital legal services to help individuals and SMEs with their legal needs.
          By combining newest technology, design thinking and legal principles we translate legal processes to fluent web applications. 
          Our aim is to demystify legal processes and offer easy-to-use digital services for everyone.</p>
      </div>
      </Fade>
      <div style={{height: '20vh'}}>
      </div>
      <Fade bottom>
      <div className="App-company">
          <div>
          <p className="headi">Products</p>
          </div>
          <div className="mobilehidden">
          <Grid container >
            <Grid item xs={6} >
              <KukaperiiText/>
            </Grid>
            <Grid item xs={6}>
              <div>
                <img src={kukaperii} alt="Kuka Perii" style={{width: '20vw', paddingLeft: "3vh", paddingTop: "3vh"}}></img>
              </div>
              <div>
                <img src={product} alt="Kuka Perii" style={{width: '40vw', paddingLeft: "3vh", paddingTop: "3vh"}}></img>
              </div>
            </Grid>
          </Grid>
          </div>

          <div className="mobileshow">
            <div>   
              <div>
                <img src={kukaperii} alt="Kuka Perii" style={{width: '40vw', paddingLeft: "3vh", paddingTop: "3vh"}}></img>
              </div>

              <div>
                <img src={product} alt="Kuka Perii" style={{width: '75vw', paddingLeft: "3vh", paddingTop: "3vh"}}></img>
              </div>

              <div>
                <KukaperiiText/>
              </div>

            
            </div>
          </div>
        </div>
        </Fade>
        
          




      <div className="App-team">
        <Fade bottom>
        <div className="headi">
        Team
        <br/>
        <br/>
        </div>
        
        
        
          <Avatar/>
        
        </Fade>
      
  
      </div>
      </div>
      // </SlideMenu>
    );
  }
}

export default App;
