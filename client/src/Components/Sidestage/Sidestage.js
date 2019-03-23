import React, {Component} from "react";
import Bandcards from "../BandCards";
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
        bio: ""
    
      };
    }
     // When the component mounts, load all bands and save them to this.state.bands
  componentDidMount() {
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
        bio:res.data.bio
         })
      
      )
      .catch(err => console.log(err));

  };

  render(){
      return(
        <React.Fragment>
          <Schedule>
              <h1>Side Stage Bands</h1>
          {this.state.bands.map(band=>(
          <Bandcards
         
          band={band.band}
          stage={band.stage}
          id={band.id}
          time={band.time}
          day={band.day}
          image={band.image}
          url={band.url}
          bio={band.bio}
          />
          ))}
          </Schedule>
          </React.Fragment>
      )
  }
}

export default Sidestage;