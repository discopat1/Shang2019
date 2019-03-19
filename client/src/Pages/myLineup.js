
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

import { Input, TextArea, FormBtn } from "react-bootstrap/Form"


class myLineup extends Component{
    state= {
        bands: [],
        band: "",
        time:"",
        day: "",
        image: "",
        url: "",
        bio: "",
       

    };

    componentDidMount(){
        this.loadUserBands();
    }

    loadUserBands =() =>{
        API.getUserbands()
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
        <div>
        <Jumbotron>
            <h2>myLineUp</h2>
            <h4>Browse stages and bands on the left</h4>
            <p>When you find a band you like, click "+ myLineUP to add their show to your list.</p>
            <p>Share with friends to easily meet up to git down!</p>
        </Jumbotron>
        <Navigation/>
        <Container>
        <Schedule>
            {this.state.userbands.map(card =>(
                <Bandcards
                key={card.id}
                band={card.band}
                stage={card.stage}
                id={card.id}
                time={card.time}
                image={card.image}
                url={card.url}
                bio={card.bio}
                />
            ))}
            
        </Schedule>
        </Container>
        </div>
    )

}

}





export default myLineup;





















//USE Books.js PAGE inside of 
//Activity 11- Stu_ReactRouter- #20- React
//as an example of what to put here for the user's lineup
//Do I need to import the card component? 
//Probably
