import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import API from "../../utils/API";
import Bandcards from "../BandCards";





class Navigation extends Component{
 
  state={
    search:"",
    stages:""
  }

handleInputChange=(e) =>{
  this.setState({search:e.target.value})
}
handleFormSubmit=(e)=>{
  e.preventDefault();
  this.setState({search: e.target.value})
  alert("You are searching for a band!")
  
}
handleMainStage=(e)=>{
  e.preventDefault();
  this.setState({stage:e.target.value});
  alert("Main stage value is", e.target.value)
}
handleSideStage =(e) =>{
  this.setState({stage:e.target.value})

}
handleHarmonium = (e)=>{
  this.setState({stage:e.target.value})
}

handleOm=(e)=>{
  this.setState({stage:e.target.value})
}

render(){
  return(  
      <Navbar className="bg-dark">
    
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
       </Nav.Item>
       <Nav.Item>
             <Link to ="/Pages/myLineup">myLineup</Link>
              <Nav.Link>Log in</Nav.Link>
           </Nav.Item>
        <Dropdown>
            <Dropdown.Toggle variant="outline-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stage Schedules</Dropdown.Toggle>
        <Dropdown.Menu>
            <Nav.Link href="/main" value="Main" onClick={this.handleMainStage}>Main Stage</Nav.Link> 
            <Nav.Link href="/side" value="Side"onClick={this.handleSideStage}>Side Stage</Nav.Link>
            <Nav.Link href="/harmonium" value="Harmonium" onCLick={this.handleHarmonium}>Harmonium</Nav.Link>
            <Nav.Link href="/om">Om Dome</Nav.Link>
         </Dropdown.Menu>
        </Dropdown>
        
           <Form inline onSubmit={this.handleFormSubmit}>
            <FormControl type="band" placeholder="Search" className="mr-sm-2" onChange={this.handleInputChange} />
            <Button variant="outline-primary" onClick={this.handleFormSubmit}>Search Bands</Button>
            
          </Form>
  </Navbar>
)
}
}
 

export default Navigation;