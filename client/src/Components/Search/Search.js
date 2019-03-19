import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
    state = {
        search: ""
    };
    handleonChange=(e) =>{
        this.setState({search:e.target.value})
    }
    // handleSubmit= (e) =>{
    //     e.preventDefault();

    // }


    render() {
        return (

            <div className="search">
                <form>
                   <input
                   type="text"
                   placeholder= "Search Bands"
                   value={this.state.value}
                   onChange={this.handleonChange}
                   />
                   
                </form>
            </div>
        )
    }
}

export default Search;