import React from "react";
import "./Bandcards.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Bandcards = props => (
  
  
  
<Card style={{ width: '18rem'}}>
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
    <Button variant="outline-warning btn-large" value={props.id}>Remove Band</Button>
    <Button variant="outline-primary btn-large">+ myLineup</Button>
  </Card.Footer>
</Card>





)

export default Bandcards;