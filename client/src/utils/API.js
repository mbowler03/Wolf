import axios from "axios";

export default {

  postPlayers: function(names) {
    return axios.post("/api/players", names);
  },
  getHole: function(id) {
    return axios.get("/api/hole/" + id);
  },
  postHole: function(id, holeData) {
    return axios.post("/api/hole/" + id, holeData);
  }

};
