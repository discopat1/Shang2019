import axios from "axios";

export default {
  // Gets all bands
  getBands: function() {
    return axios.get("/api/bands");
  },
  // Gets the book with the given id
  getBand: function(id) {
    return axios.get("/api/books/" + id);
  },
  //Get user's favorited bands for myLineup
  getuserBand: function(){
      return axios.get("/api/bands/:userID");
  },
  // Deletes the band with the given band id
  deleteBook: function(id) {
    return axios.delete("/api/bands/" + id);
  }
 
};