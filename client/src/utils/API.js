import axios from "axios";

export default {
  // Gets all bands

  getBands: function () {
    return axios.get("/api/bands");
  },
  getMain: function () {
    return axios.get("/api/bands/main");
  },
  getMainFriday: function () {
    return axios.get("/api/bands/main/friday");
  },
  getMainSaturday: function () {
    return axios.get("/api/bands/main/saturday");
  },
  getMainSunday: function () {
    return axios.get("/api/bands/main/sunday");
  },

  getSide: function () {
    return axios.get("/api/bands/side")
  },
  getSideFriday: function () {
    return axios.get("/api/bands/side/friday")
  },
  getSideSaturday: function () {
    return axios.get("/api/bands/side/saturday")
  },
  getSideSunday: function () {
    return axios.get("/api/bands/side/sunday")
  },
  getHarmonium: function () {
    return axios.get("/api/bands/harmonium")
  },
  getHarmoniumFriday: function () {
    return axios.get("/api/bands/harmonium/friday")
  },
  getHarmoniumSaturday: function () {
    return axios.get("/api/bands/harmonium/saturday")
  },
  getHarmoniumSunday: function () {
    return axios.get("/api/bands/harmonium/sunday")
  },
  getOm: function () {
    return axios.get("/api/bands/om")
  },
  gotOmFriday: function () {
    return axios.get("/api/bands/om/friday")
  },

  getOmSaturday: function () {
    return axios.get("/api/bands/om/saturday")
  },

  getOmSunday: function () {
    return axios.get("/api/bands/om/sunday")
  },



  // Gets the book with the given id
  getBand: function (id) {
    return axios.get("/api/bands/" + id);
  },
  //Get user's favorited bands for myLineup
  getuserBand: function (id) {
    return axios.get("/api/bands/"+ id+"/bands");
  },
  // Deletes the band with the given band id
  deleteBand: function (_id) {
    console.log("DeleteBand function fired"+ _id)
    return axios.delete("/api/bands/" + _id);
  },
  //Get the user data
  getUser: function (_id) {
    return axios.get("/api/users" + _id);
  }

};