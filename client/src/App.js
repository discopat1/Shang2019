import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Components/Header';
import Nav from './Components/Nav';
import Stage from './Pages/Stage';
import Sidestage from './Components/Sidestage';
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
import Mainstage from './Components/Mainstage/Mainstage';
import Harmonium from './Components/Harmonium';
import Om from './Components/Om';
library.add(fab, faCheckSquare, faCoffee, faInfoCircle, faHeart, faFire);


function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Nav />
        <Firstpage/>
        <div>
          <Switch>
          <Route exact path='/mylineup' component={myLineup} />
          <Route exact path='/' component={Stage} />
          <Route exact path="/main" component={Mainstage} />
          <Route exact path="/side" component={Sidestage} />
          <Route exact path="/harmonium" component={Harmonium} />
          <Route exact path="/om" component={Om} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>


  );
}

export default App;
