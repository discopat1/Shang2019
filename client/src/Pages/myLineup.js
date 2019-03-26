import React, { Component } from "react";
import Axios from 'axios';
import "./myLineup.css";
import "../Components/BandCards/Bandcards.css"
import Schedule from '../Components/Schedule';
import Navigation from '../Components/Nav';
import Bandcards from "../Components/BandCards";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from "../utils/API";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Input, TextArea, FormBtn } from "react-bootstrap/Form"


class myLineup extends Component {
    state = {
        bands: [],
        band: "",
        time: "",
        day: "",
        image: "",
        url: "",
        bio: "",
        _id: ""




    };

    componentDidMount() {
        this.loadUserBands();
    }
    componentDidUpdate(){
        this.loadUserBands();
    }
    loadUserBands = () => {
        API.getBands()
            .then(res =>
                this.setState({ bands: res.data, stage: "", band: "", time: "", day: "", image: "", url: "", bio: "", _id: "" })
            )
            .catch(err => console.log(err));
    };

   async deleteBand (_id) {
         Axios.delete(`/api/bands/${_id}`)
        console.log("Here's the axios band id",_id)
     
            let bandListCopy = this.state.bands // grab a copy of the current band list
            for (let i = 0; i < bandListCopy.length; i++) {
              let newband = bandListCopy[i]
              if (newband.id === _id) {        // if it’s the correct ID...
                bandListCopy.splice(i, 1)  // delete band item
                break                      // we’re done! break the loop
              }
            }
            this.setState({bands: bandListCopy}) // we update state with remaining bands
          }
        
    
   
       
    

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <div className="mylineup-header">
                        <h2>myLineup</h2><FontAwesomeIcon icon="user-check" />
                        <h6>See your shows!<br /> Easily Remove performers, or go look for new ones to check out.</h6><br />
                        <p>Share with friends to meet up and git down!</p>
                    </div>
                </Jumbotron>
                <Container>
                    <div id="all-bands-header">
                        <h2>My Shows</h2><br />
                        <Button variant="outline-success btn-large">Share myLineup</Button>
                    </div>
                    <Schedule>
                        {this.state.bands.map(card => (
                            
                            <Card style={{ width: '18rem' }} key={card._id}>
                                <Card.Img variant="top" src={card.image} />
                                <Card.Body>
                                    <Card.Title>{card.band}</Card.Title>
                                </Card.Body>
                                <Card.ImgOverlay>
                                    {card.day} | {card.time} | {card.stage}
                                </Card.ImgOverlay>
                                <Card.Footer>
                                    <Button className="btn-success btn-large" href={card.url}><FontAwesomeIcon icon="info-circle" /></Button>
                                    <Button variant="outline-warning btn-large" value={card._id} onClick={()=>this.deleteBand(card._id)}>Remove Band</Button>
                                </Card.Footer>
                            </Card>
                        ))}

                    </Schedule>


                </Container>
            </React.Fragment>
        )

    }

}





export default myLineup;





















//USE Books.js PAGE inside of 
//Activity 11- Stu_ReactRouter- #20- React
//as an example of what to put here for the user's lineup
//Do I need to import the card component? 
//Probably
