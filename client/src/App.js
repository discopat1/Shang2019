import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Nav from './Components/Nav';
import Bandcards from './Components/BandCards';
import myLineup from './Pages/myLineup';
// import stages from './stage.json';
import API from "./utils/API";
import Schedule from './Components/Schedule';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faInfoCircle, faHeart,faFire} from '@fortawesome/free-solid-svg-icons';
import Firstpage from './Components/Firstpage/Firstpage';
library.add(fab, faCheckSquare, faCoffee, faInfoCircle, faHeart, faFire);

// import Swipe from {Component}'react-easy-swipe';

class App extends Component {
  state = {
    data:[]
  };
    // When the component mounts, load all bands and save them to this.state.books
    componentDidMount() {
      this.loadBands();
    }
  
    // Loads all bands  and sets them to this.state.bands
    loadBands = () => {
      API.getBands()
        .then(res =>
          this.setState({ data: res.data})
        )
        .catch(err => console.log(err));
    };

  render() {
    return (
      <Router>
        <div>
         <Header></Header>
         <Nav/>
         <Firstpage/>
         <Switch>
         <Route path='/myLineup' Component={myLineup}/>
         </Switch>
         <Schedule>
         {this.state.data.map(card=>(
          <Bandcards
          key={this.state.id}
          band={card.band}
          stage={card.stage}
          id={card.id}
          time={card.time}
          day={card.day}
          image={card.image}
          url={card.url}
          bio={card.bio}
          />
          ))}
          </Schedule>
        
         
         
      </div>
      </Router>
    );
  }
}

export default App;
