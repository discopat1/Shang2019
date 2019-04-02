import axios from "axios";

export default {
  // Gets all bands

  getBands: function () {
    return axios.get("/api/bands/");
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



  // Gets the band with the given id
  getBand: function (id) {
    return axios.get("/api/bands/" + id);
  },

  //Get all users

  getUsers: function(){
    return axios.get("/api/users/register/all")
  },
  //Get the user by ID

  getUser: function(id){
    return axios.get("/api/users/register/all", id);
  },
  //Get user's favorited bands for myLineup
  getuserBands: function (id) {
    return axios.get("/api/users/register/all", id +"/bands");
  },
  // Deletes the band with the given band id
  deleteBand: function (_id) {
    console.log("DeleteBand function fired"+ _id)
    return axios.delete("/api/bands/" + _id);
  },
  addBand: function(userId, bandId) {
    // console.log(userId, bandId)
    // console.log("Add band user id",userId + "Band id",_id)
    return axios.put(`/api/users/register/all/${userId}`, {bandId} );
  }
 
  // //Get the user data
  // getUser: function (_id) {
  //   return axios.get("/api/users" + _id);
  // }

};