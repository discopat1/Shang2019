import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Nav from './Components/Nav';
import Bandcards from './Components/BandCards';
import myLineup from './Pages/myLineup';
import "../src/Components/BandCards/Bandcards.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from "./utils/API";
import Schedule from './Components/Schedule';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faInfoCircle, faHeart, faFire } from '@fortawesome/free-solid-svg-icons';
import Firstpage from './Components/Firstpage/Firstpage';
library.add(fab, faCheckSquare, faCoffee, faInfoCircle, faHeart, faFire);

// import Swipe from {Component}'react-easy-swipe';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bands: [],
      stage: "",
      band: "",
      time: "",
      day: "",
      image: "",
      url: "",
      bio: ""
  
    };
  }

   
  
  // When the component mounts, load all bands and save them to this.state.bands
  componentDidMount() {
    this.loadBands();
  }

  // Loads all bands  and sets them to this.state.bands
  loadBands = () => {
    API.getBands()
      .then(res =>
      
       this.setState({
        bands:res.data,
        stage:res.data.stage,
        band:res.data.band,
        time:res.data.time,
        day:res.data.day,
        image:res.data.image,
        url:res.data.url,
        bio:res.data.bio
         })
      
      )
      .catch(err => console.log(err));

  };

  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          <Nav />
          <Firstpage />
          <Switch>
            <Route path='/myLineup' Component={myLineup} />
          </Switch>
          <Schedule>
          {this.state.bands.map(band=>(
          <Bandcards
         
          band={band.band}
          stage={band.stage}
          id={band.id}
          time={band.time}
          day={band.day}
          image={band.image}
          url={band.url}
          bio={band.bio}
          />
          ))}
          </Schedule>



        </div>
      </Router>
    );
  }
}

export default App;
