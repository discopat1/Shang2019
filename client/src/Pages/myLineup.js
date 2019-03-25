import React, {Component} from "react";
import "./myLineup.css";
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


class myLineup extends Component{
    state= {
        bands: [],
        band: "",
        time:"",
        day: "",
        image: "",
        url: "",
        bio: ""
        
       

    };

    componentDidMount(){
        this.loadUserBands();
    }

    loadUserBands =() =>{
        API.getBands()
        .then(res =>
            this.setState({bands:res.data, stage:"", band:"", time:"", day: "", image:"", url:"",bio:""})
            )
            .catch(err=> console.log(err));
    }; 

    deleteBand = id => {
        API.deleteBand(id)
        .then(res => this.loadBands())
        .catch(err => console.log(err));
    };


render(){
    return(
        <React.Fragment>
        <Jumbotron>
            <div className="mylineup-header">
            <h2>myLineup</h2><FontAwesomeIcon icon="user-check"/>
            <h6>See your shows!<br/> Easily Remove performers, or go look for new ones to check out.</h6><br/>
            <p>Share with friends to meet up and git down!</p>
            </div>
        </Jumbotron>
        <Container>
           <div  id="all-bands-header">
                <h2>My Shows</h2><br/>
                <Button variant="outline-success btn-large">Share myLineup</Button>
            </div>
        <Schedule>
            {this.state.bands.map(card =>(
                <Bandcards
                key={card.id}
                band={card.band}
                stage={card.stage}
                id={card.id}
                time={card.time}
                image={card.image}
                url={card.url}
                bio={card.bio}
                day={card.day}
                />
               
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
