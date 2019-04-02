import axios from "axios";

export default {

  // BANDS

  //All bands
  getBands: function () {
    return axios.get("/api/bands/");
  },

  //Main stage bands
  getMain: function () {
    return axios.get("/api/bands/main");
  },

  //Main stage Fri bands
  getMainFriday: function () {
    return axios.get("/api/bands/main/friday");
  },

  //Main Saturday
  getMainSaturday: function () {
    return axios.get("/api/bands/main/saturday");
  },

  //Main Sunday
  getMainSunday: function () {
    return axios.get("/api/bands/main/sunday");
  },

  //Side All
  getSide: function () {
    return axios.get("/api/bands/side")
  },

  //Side Fri
  getSideFriday: function () {
    return axios.get("/api/bands/side/friday")
  },
  //Side Sat
  getSideSaturday: function () {
    return axios.get("/api/bands/side/saturday")
  },
  //Side Sun
  getSideSunday: function () {
    return axios.get("/api/bands/side/sunday")
  },
  //Harmonium All
  getHarmonium: function () {
    return axios.get("/api/bands/harmonium")
  },
  //Harmonium Fri
  getHarmoniumFriday: function () {
    return axios.get("/api/bands/harmonium/friday")
  },
  //Harmonium Sat
  getHarmoniumSaturday: function () {
    return axios.get("/api/bands/harmonium/saturday")
  },

  //Harmonium Sun
  getHarmoniumSunday: function () {
    return axios.get("/api/bands/harmonium/sunday")
  },

  //Om All
  getOm: function () {
    return axios.get("/api/bands/om")
  },

  //Om Fri
  gotOmFriday: function () {
    return axios.get("/api/bands/om/friday")
  },

  //Om Sat
  getOmSaturday: function () {
    return axios.get("/api/bands/om/saturday")
  },

  //Om Sun
  getOmSunday: function () {
    return axios.get("/api/bands/om/sunday")
  },




  // Gets the band with the given id
  getBand: function (id) {
    return axios.get("/api/bands/" + id);
  },

  //USERS:

  //Get all users

  getUsers: function () {
    return axios.get("/api/users/register/all")
  },

  //Get the user by ID
  getUser: function (id) {
    return axios.get("/api/users/register", id);
  },

  //Get user's favorited bands for myLineup
  getUserBands: function (userId) {
    
    return axios.get(`/api/users/register/all/${userId}/bands/`);
  },

  // Deletes the band with the given band id
  deleteBand: function (userId, _id) {
    console.log("DeleteBand function fired" + _id)
    return axios.delete(`/api/users/register/all/${userId}/bands/`, {_id});
  },

  //Add Band to User's bands array
  addBand: function (userId, bandId) {
    console.log("Axios is getting:",userId, bandId)
    return axios.put(`/api/users/register/all/${userId}/bands/`,{bandId});
  }


};