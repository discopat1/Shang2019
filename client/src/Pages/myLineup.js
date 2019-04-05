import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../Components/actions/authActions";
import "./myLineup.css";
import "../Components/BandCards/Bandcards.css"
import Schedule from '../Components/Schedule';
import { Container,Jumbotron,Card,Button,Row,Col} from "react-bootstrap";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class myLineup extends Component {
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

    // componentDidUpdate() {
    //     this.loadUserBands();
    // };



    loadUserBands = () => {
        const userId = this.props.auth.user.id
        API.getUserBands(userId)

            .then(res =>
                this.setState({ bands: res.data[0].userBands })

            )
            .catch(err => console.log(err));
    };


    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    shareButton=(e)=>{
        e.preventDefault();
        alert("Sharing coming soon!")
    }

    // Deletes band from user's array, loops back through remaining bands
         deleteBand = (bandId) => {
            const userId = this.props.auth.user.id
            API.deleteBand(userId,bandId);
            console.log("deleteBand function from mylineup: ", userId, "and bandId: ",bandId)

      };

        //     let bandListCopy = this.state.bands // grab a copy of the current band list
        //     for (let i = 0; i < bandListCopy.length; i++) {
        //         let newband = bandListCopy[i]
        //         if (newband.id === bandId) {        // if it’s the correct ID...
        //             bandListCopy.splice(i, 1)  // delete band item
        //             break                      // we’re done! break the loop
        //         }
        //     }
        //     this.setState({ bands: bandListCopy }) // we update state with remaining bands
        // }






    render() {
        const { user } = this.props.auth;
        return (
            <React.Fragment>
                <Jumbotron>
                    <div id="mylineup-header"> 
                        <h2> Welcome to myLineup,{user.name}!</h2><FontAwesomeIcon icon="user-check" />
                        <h6 style={{ color: "black" }}>See your shows!<br /> Easily Remove performers, or go look for new ones to check out.</h6><br />
                        <h6 style={{ color: "black" }}>Share with friends to meet up and git down!</h6>
                        <Link to="/search">
                           <Button 
                            variant="outline-info"
                        >
                            Get Bands
                        </Button>
                        </Link>
                        <Button variant="outline-success btn-large"onClick={this.shareButton}>
                            Share
                        </Button>
                        
                        <Button
                            onClick={this.onLogoutClick}
                            variant="outline-primary btn-large"
                        >
                            Logout
                        </Button>
                        </div>
                </Jumbotron>
                <Container>
                    <div id="all-bands-header">
                        <h1>My Shows</h1><hr />

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
                                        <Button variant="outline-warning btn-large" onClick={() => this.deleteBand(card._id)}>Remove Band</Button>
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

myLineup.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(myLineup);























