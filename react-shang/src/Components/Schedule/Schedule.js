import React from "react";
import "./Schedule.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

///////Need to make this a stateful component triggered off of the Nav links

const Schedule = props => (

  
    <Container className="container-fluid" id="schedule">
 
      <Row id="band-name">
        
        {props.children}
       
      </Row>

    </Container>

)



export default Schedule;