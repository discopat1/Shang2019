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



// handleInputChange=(e) =>{
//   this.setState({search:e.target.value})
// }
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
            <Nav.Link href="/main">Main Stage</Nav.Link> 
            <Nav.Link href="/side">Side Stage</Nav.Link>
            <Nav.Link href="/harmonium" value="Harmonium">Harmonium</Nav.Link>
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

};

export default Navigation;