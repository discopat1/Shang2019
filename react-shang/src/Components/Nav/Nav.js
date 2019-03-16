import React, {Component} from "react";
import "./Nav.css";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';





class Navigation extends Component{
  state = {
    search: ""
};
handleInputChange=(e) =>{
  this.setState({search:e.target.value})
}
handleFormSubmit=(e)=>{
  e.preventDefault();
  this.setState({search: e.target.value});
  alert("You are searching for a band!")
  
}
render(){
  return(  
      <Navbar className="bg-dark">
    
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
       </Nav.Item>
       <Nav.Item>
              {/* <Nav.Link href="/myLineup/:id?">myLineup</Nav.Link> */}
              <Nav.Link>Log in</Nav.Link>
           </Nav.Item>
        <Dropdown>
            <Dropdown.Toggle variant="outline-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stage Schedules</Dropdown.Toggle>
        <Dropdown.Menu>
            <Nav.Link event key="link-main" href="/main">Main Stage</Nav.Link> 
              <ul id="stage-days">
                <Dropdown.Item eventKey="/main-fri" href="/main/friday">Friday</Dropdown.Item>
                <Dropdown.Item eventKey="/main-sat" href="/main/saturday">Saturday</Dropdown.Item>
                <Dropdown.Item eventKey="/main-sun" href="/main/sunday">Sunday</Dropdown.Item>
              </ul>
            <Nav.Link eventKey="link-side" href="/side">Side Stage</Nav.Link>
            <ul id="stage-days">
                <Dropdown.Item eventKey="side-fri" href="/side/friday">Friday</Dropdown.Item>
                <Dropdown.Item eventKey="side-sat" href="/side/saturday">Saturday</Dropdown.Item>
                <Dropdown.Item eventKey="side-sun" href="/side/sunday">Sunday</Dropdown.Item>
              </ul>
            <Nav.Link eventKey="link-harmonium" href="/harmonium">Harmonium</Nav.Link>
            <ul className="stage-days">
                <Dropdown.Item eventKey="harmonium-fri" href="/harmonium/friday">Friday</Dropdown.Item>
                <Dropdown.Item eventKey="harmonium-sat" href="/harmonium/saturday">Saturday</Dropdown.Item>
                <Dropdown.Item eventKey="harmonium-sun" href="/harmonium/sunday">Sunday</Dropdown.Item>
              </ul>
            <Nav.Link eventKey="link-om" href="om">Om Dome</Nav.Link>
            <ul className="stage-days">
                <Dropdown.Item eventKey="om-fri" href="/om/friday">Friday</Dropdown.Item>
                <Dropdown.Item eventKey="om-sat" href="/om/saturday">Saturday</Dropdown.Item>
                <Dropdown.Item eventKey="om-sun" href="/om/sunday">Sunday</Dropdown.Item>
              </ul>
              </Dropdown.Menu>
          </Dropdown>
        
           <Form inline>
            <FormControl type="band" placeholder="Search" className="mr-sm-2" onChange={this.handleInputChange} />
            <Button variant="outline-primary" onClick={this.handleFormSubmit}>Search Bands</Button>
            
          </Form>
  </Navbar>
)
}
}
 

export default Navigation;