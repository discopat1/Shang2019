import React, { Component } from 'react';
import './App.css';
// import Firstpage from './Components/Firstpage';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Bandcards from './Components/BandCards';
import myLineup from './Pages/myLineup';
import stages from './stage.json';
import Schedule from './Components/Schedule';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faInfoCircle, faHeart,faFire} from '@fortawesome/free-solid-svg-icons';
import Firstpage from './Components/Firstpage/Firstpage';
library.add(fab, faCheckSquare, faCoffee, faInfoCircle, faHeart, faFire);

// import Swipe from {Component}'react-easy-swipe';

class App extends Component {
  state = {
    stages,
    band: "",
    stage:"",
    id: "",
    time:"",
    day: "",
    image: "",
    url: "",
    bio: ""
  }
  render() {
    return (
        <div>
         <Header></Header>
         <Nav/>
         <Firstpage/>
         <Schedule>
         {this.state.stages.map(card=>(
          <Bandcards
          key={card.id}
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
    );
  }
}

export default App;
