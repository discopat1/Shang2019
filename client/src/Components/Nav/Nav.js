import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import "./Nav.css";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoutUser } from "../actions/authActions";







class Navigation extends Component{
  constructor(props) {
    super(props);
   
    this.state = {
      data:[],
      bands: [],
      stage: "",
      band: "",
      time: "",
      day: "",
      image: "",
      url: "",
      bio: "",
      search:"",
      userId:""
    };
  
  }

componentDidMount(){
  const userId = this.props.auth.user.id
  if (this.props.auth.isAuthenticated) {
      this.setState({
          userId: userId
      })
      console.log("this is the userid", userId)

  }

}




onLogoutClick= e =>{
    e.preventDefault();
    this.props.logoutUser();
};


handleInputChange=(e) =>{
  this.setState({search:e.target.value})
}
handleFormSubmit=(e)=>{
  e.preventDefault();
  this.setState({search: e.target.value})
  alert("You are searching for a band!")
}  
myLineup=()=>this.props.auth.isAuthenticated ?(
    <Redirect to="/mylineup"/>
  ):(  alert("Please login or create an account!")
  )

render(){
  
  return(  
      <Navbar className="bg-dark">
    
        <Nav.Item>
          <Link to="/search">Full Lineup</Link>
       </Nav.Item>
       <Nav.Item>
             <Link to ="/mylineup"onClick={() => this.myLineup()}> <FontAwesomeIcon icon="user-check"></FontAwesomeIcon> myLineup</Link>
        </Nav.Item>
          <Nav.Item>
              <Link to="/login">Log in</Link>
           </Nav.Item>
           <Nav.Item>
             <Button variant="btn btn-info" onClick={this.onLogoutClick}>Log Out</Button>
           </Nav.Item>
        <Dropdown>
            <Dropdown.Toggle variant="outline-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stage Schedules</Dropdown.Toggle>
        <Dropdown.Menu>
            <Link to="/main">Main Stage</Link><br/>
            <Link to="/side">Side Stage</Link><br/>
            <Link to="/harmonium">Harmonium</Link><br/>
            <Link to="/om">Om Dome</Link><br/>
         </Dropdown.Menu>
        </Dropdown>
        
           <Form inline>
            <FormControl type="band" placeholder="Search Bands" className="mr-sm-2" onChange={this.handleInputChange} />
            <Button variant="outline-primary">Search</Button>
            
          </Form>
  </Navbar>
)
}

};

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  {logoutUser}
)(Navigation);

