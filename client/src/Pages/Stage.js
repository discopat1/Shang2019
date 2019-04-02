import React, { Component }from 'react';
import Axios from 'axios';
import { logoutUser } from "../Components/actions/authActions";
import Schedule from "../Components/Schedule";
import Bandcards from "../Components/BandCards";
import API from "../../src/utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Stage extends Component {
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
        bio: "",
        _id: "",
        userId:"",
       
      };
    }
  
     
    
    // When the component mounts, load all bands and save them to this.state.bands
    componentDidMount() {
    
        console.log("Stage loaded");
      
        if(this.props.auth.isAuthenticated){
          // const {user} = this.props.auth
          const userId = this.props.auth.user.id
          this.setState({
            userId:userId,
            
        })

          console.log("this is the userId", userId)
        }
      this.loadBands()
        }
    
    // async addBand(id) {
    //   Axios.delete(`/api/users/register/bands/${id}`)
    //   console.log("Here's the axios band id", id)
    // }
    // Loads all bands  and sets them to this.state.bands
    loadBands = () => {
      API.getBands()
        .then(res =>
        
         this.setState({
          bands:res.data,
          stage:res.data.stage,
          band:res.data.band,
          time:res.data.time,
          day:res.data.day,
          image:res.data.image,
          url:res.data.url,
          bio:res.data.bio,
          _id: res.data._id, 
          
           })
        )
        .catch(err => console.log(err));
  
    };

    addBand = (_id) => {
      const userId = this.props.auth.user.id
        API.addBand(userId, _id)
      // console.log("addBand band id ", _id + "and this is the userId",userId);
    }
    render() {
     
      return (
          <React.Fragment>
            <div id="schedule-head">The Full Lineup
              <h5>Click "+ myLineup" to add any band to your personalized lineup!</h5>
            </div>
            <Schedule>
            {this.state.bands.map(band=>(
            <Bandcards
            key={band._id}
            band={band.band}
            stage={band.stage}
            _id={band._id}
            time={band.time}
            day={band.day}
            image={band.image}
            url={band.url}
            bio={band.bio}
            addBand={this.addBand}

            
            />
            

            ))}
            
            </Schedule>
            </React.Fragment>
      );
    }
  }
  
  Stage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Stage);
  
