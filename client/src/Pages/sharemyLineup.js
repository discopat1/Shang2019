import React, { Component } from "react";
import PropTypes from "prop-types";
import "./myLineup.css";
import {connect} from 'react-redux';
import "../Components/BandCards/Bandcards.css";
import Schedule from '../Components/Schedule';
import {Container,Card,Button} from "react-bootstrap";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class shareLineup extends Component {
    constructor(props) {
    super(props);
    this.state = {
        
        bands: [],
        stage:"",
        band: "",
        time: "",
        day: "",
        image: "",
        url: "",
        bio: "",
        _id: "",
        userId: ""

    };
}


   

    componentDidMount() {
        const userId = this.props.auth.user.id
        if (this.props.auth.isAuthenticated) {
            this.setState({
                userId: userId

            })
            console.log("this is the userid", userId)

        }
        this.loadUserBands()
    }

  



    loadUserBands = () => {
        const userId = this.props.auth.user.id
        API.getUserBands(userId)

            .then(res =>
                this.setState({ bands: res.data[0].userBands })

            )
            .catch(err => console.log(err));
    };



    render() {
        const { user } = this.props.auth;
        return (
            <React.Fragment>
                <Container>
                    <div id="all-bands-header">
                        <h1>{user.name}'s Shows</h1><hr />

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
                                    </Card.Footer>
                                </Card>
                            ))}

                        </Schedule>

                    </div>
                </Container>
            </React.Fragment>
        );

    }
}

shareLineup.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    
)(shareLineup);























