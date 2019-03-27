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





class Navigation extends Component{
 

    state = {
      bands: [],
      stage: "",
      band: "",
      time: "",
      day: "",
      image: "",
      url: "",
      bio: "",
      search:""
    };
  
  

// loadMain= (props) =>{
//   API.getMain()
//   .then(res =>
  
//    this.setState({
//     bands:res.data,
//     stage:res.data.stage,
//     band:res.data.band,
//     time:res.data.time,
//     day:res.data.day,
//     image:res.data.image,
//     url:res.data.url,
//     bio:res.data.bio
//      })
  
//   )
//   .catch(err => console.log(err));

// };
// loadSide=()=>{
//   API.getSide()
//   .then(res =>
  
//    this.setState({
//     bands:res.data,
//     stage:res.data.stage,
//     band:res.data.band,
//     time:res.data.time,
//     day:res.data.day,
//     image:res.data.image,
//     url:res.data.url,
//     bio:res.data.bio
//      })
  
//   )
//   .catch(err => console.log(err));

// }
// loadHarmonium=()=>{
//   API.getHarmonium()
//   .then(res =>
  
//    this.setState({
//     bands:res.data,
//     stage:res.data.stage,
//     band:res.data.band,
//     time:res.data.time,
//     day:res.data.day,
//     image:res.data.image,
//     url:res.data.url,
//     bio:res.data.bio
//      })
  
//   )
//   .catch(err => console.log(err));

// }

// loadOm=()=>{
//   API.getOm()
//   .then(res =>
  
//    this.setState({
//     bands:res.data,
//     stage:res.data.stage,
//     band:res.data.band,
//     time:res.data.time,
//     day:res.data.day,
//     image:res.data.image,
//     url:res.data.url,
//     bio:res.data.bio
//      })
  
//   )
//   .catch(err => console.log(err));


// };



handleInputChange=(e) =>{
  this.setState({search:e.target.value})
}
// handleFormSubmit=(e)=>{
//   e.preventDefault();
//   this.setState({search: e.target.value})
//   alert("You are searching for a band!")
  
// };
// handleMainStage=(e)=>{
//   e.preventDefault();
//   loadMain();
 
// }
// handleSideStage =(e) =>{
//   e.preventDefault();
//   loadSide();
// };
// handleHarmonium = (e)=>{
//   loadHarmonium();
// };

// handleOm=(e)=>{
//   loadOm();
// };
  
render(){
  return(  
      <Navbar className="bg-dark">
    
        <Nav.Item>
          <Nav.Link href="/search">Home</Nav.Link>
       </Nav.Item>
       <Nav.Item>
             <Link to ="/mylineup">myLineup</Link><br/>
              <Link to="/">Log in</Link>
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

export default Navigation;