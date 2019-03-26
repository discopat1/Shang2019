import React, { Component }from 'react';
import Schedule from "../Components/Schedule";
import Button from "react-bootstrap/Button";
import Bandcards from "../Components/BandCards";
import API from "../../src/utils/API";


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
        id: ""
      };
    }
  
     
    
    // When the component mounts, load all bands and save them to this.state.bands
    componentDidMount() {
        console.log("Stage loaded");
      this.loadBands()

    
    }
  
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
          id: res.data.id
           })
        )
        .catch(err => console.log(err));
  
    };
  
    render() {
      return (
          <React.Fragment>
            <div id="schedule-head">The Full Lineup</div>
            <Schedule>
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
      );
    }
  }
  
  export default Stage;
  
