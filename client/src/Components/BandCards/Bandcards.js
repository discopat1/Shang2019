import React from "react";
import "./Bandcards.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Bandcards = props => (
  
  
  
<Card style={{ width: '18rem'}} key={props.id}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.band}</Card.Title>
    
    <Card.Text>
   {props.bio}
    </Card.Text>
  </Card.Body>
  <Card.ImgOverlay>
  {props.day} | {props.time} | {props.stage}
  </Card.ImgOverlay>
  <Card.Footer id="footer">
    <Button className="btn-success btn-large" href={props.url}><FontAwesomeIcon icon="info-circle"/></Button>
    <Button variant="outline-primary btn-large" value={props._id} onClick={() => props.addBand(props._id)}>+ myLineup</Button>
  </Card.Footer>
</Card>





)

export default Bandcards;