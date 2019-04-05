import React, {Component} from "react";
import Bandcards from "../BandCards";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../utils/API";
import Schedule from "../Schedule";


class Sidestage extends Component {
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
        userId:"",
    
      };
    }
     // When the component mounts, load all bands and save them to this.state.bands
  componentDidMount() {
    
    if (this.props.auth.isAuthenticated) {
      // const {user} = this.props.auth
      const userId = this.props.auth.user.id
      this.setState({
        userId: userId,

      })
    }
    this.loadBands();
  }

  // Loads all bands  and sets them to this.state.bands
  loadBands = () => {
    API.getSide()
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
        _id:res.data_id
         })
      
      )
      .catch(err => console.log(err));

  };
  addBand = (bandId) => {
    const userId = this.props.auth.user.id
    API.addBand(userId, bandId)
    console.log("addBand band id ", bandId + "and this is the userId", userId);
  };

  render(){
      return(
        <React.Fragment>
          <div id="schedule-head">
              <h1>Side Stage Performers</h1>
          </div>
          <Schedule>
          {this.state.bands.map(band =>(
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


Sidestage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(Sidestage);