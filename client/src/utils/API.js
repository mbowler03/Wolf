import axios from "axios";

export default {
  
  postPlayers: function() {
    return axios.post("/api/newround");
  },
  getSession: function() {
    return axios.get("/api/hole/" +id);
  },
  postHole: function(id) {
    return axios.post("/api/n/" + id);
  },
  getResults: function() {
    return axios.get("/api/hole/" +id);
  },

};
