import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Nav.css";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoutUser } from "../actions/authActions";
import Axios from "axios";
import { Navbar, Button, Dropdown, Nav, } from "react-bootstrap";






class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState
    this.state = {
      logbutton: "",
      bands: [],
      stage: "",
      band: "",
      time: "",
      day: "",
      image: "",
      url: "",
      bio: "",
      search: "",
      userId: ""
    };

  }

  componentDidMount() {
    const userId = this.props.auth.user.id
    if (this.props.auth.isAuthenticated) {
      this.setState({
        userId: userId,
        logbutton: "Log Out"
      })
      console.log("this is the userid", userId)

    }
    else (this.setState({
      logbutton: "Log In"
    }));

  }




  loginRedirect = (e) => {
    e.preventDefault();
    window.location.pathname = '/login'


  };




onLogoutClick = e => {
  e.preventDefault();
  this.props.logoutUser();

};


handleInputChange = (e) => {
  this.setState({ search: e.target.value })
};
handleFormSubmit = (e) => {
  e.preventDefault();
  this.setState({ search: e.target.value })
  alert("Search feature coming soon!")
}

myLineup = () => this.props.auth.isAuthenticated ? (
  <Redirect to="/mylineup" />
) : (alert("Please login or create an account!"));

render(){

  return (
    <Navbar className="bg-dark">
      <Dropdown>
        <Dropdown.Toggle variant="outline-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Stages</Dropdown.Toggle>
        <Dropdown.Menu>
          <Link to="/search">Full Lineup</Link><br />
          <Link to="/main">Main Stage</Link><br />
          <Link to="/side">Side Stage</Link><br />
          <Link to="/harmonium">Harmonium</Link><br />
          <Link to="/om">Om Dome</Link><br />
        </Dropdown.Menu>
      </Dropdown>
      <Nav.Item>
        <Link to="/mylineup" onClick={() => this.myLineup()}>
          <Button
            variant="outline-info"
          >
            <FontAwesomeIcon icon="user-check"></FontAwesomeIcon> myLineup
             </Button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        {this.props.auth.isAuthenticated ? (
          <Button
            variant="outline-primary"
            onClick={this.onLogoutClick}>
            <FontAwesomeIcon icon="user-check"></FontAwesomeIcon>Log Out
             </Button>
        ) : (
            <Button
              variant="outline-primary"
              onClick={this.loginRedirect}>
              <FontAwesomeIcon icon="user-check"></FontAwesomeIcon>Log In
             </Button>

          )}
        {/* <Link to ="/login"> 
             <Button 
             variant="outline-primary"
             onClick={this.logClick}>
             <FontAwesomeIcon icon="user-check"></FontAwesomeIcon>Log In
             </Button>
             </Link> */}
      </Nav.Item>

    </Navbar>
  )
}
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);

