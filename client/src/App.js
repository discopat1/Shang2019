import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//User Auth
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Components/actions/authActions";
import PrivateRoute from "./Components/private-route/PrivateRoute";
//Redux-state management
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
//Social Media Sharing:
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
} from 'react-share';
//CSS


//Components

import Header from './Components/Header';
import Nav from './Components/Nav';
import Stage from './Pages/Stage';
import Mainstage from './Components/Mainstage/Mainstage';
import Harmonium from './Components/Harmonium';
import Om from './Components/Om';
import Sidestage from './Components/Sidestage';
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import myLineup from './Pages/myLineup';
import "../src/Components/BandCards/Bandcards.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faInfoCircle, faHeart, faFire, faUserTimes, faUserCheck} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faInfoCircle, faHeart, faFire, faUserTimes, faUserCheck);


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component{
  
    // constructor(props) {
    //   super(props);
    //   this.state = {}
    //   this.connecToServer = this.connecToServer.bind(this);
    // }
    // connecToServer() {
    //   fetch('/');
    // }
  
    // componentDidMount() {
    //   this.connecToServer();
    // }
  render() {
   return (
    
    <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Nav />
        <div>
          <Switch>
          <PrivateRoute exact path='/mylineup' component={myLineup} />
          <Route exact path='/' component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/search' component={Stage} />
          <Route exact path="/main" component={Mainstage} />
          <Route exact path="/side" component={Sidestage} />
          <Route exact path="/harmonium" component={Harmonium} />
          <Route exact path="/om" component={Om} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    </Provider>

   
  );
}
}

export default App;