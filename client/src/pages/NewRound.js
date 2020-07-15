import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API.js";
import './style.css';

class NewRound extends Component {
  state = {
    players: ["", "", "", ""]
  };

  handleInputChange = event => {
    let players = [...this.state.players];
    players[parseInt(event.target.name)] = event.target.value;
    this.setState({players});
  };

  handleButtonSubmit = event => {
    event.preventDefault();
    API.postPlayers(this.state.players)
      .then(res => {
        localStorage.setItem("id", res.data);
        window.location.href="/hole";
      })
      .catch(err => console.log(err));
  };

  render_forms = () => {
    const forms = [];
    for (let i = 0; i < this.state.players.length; i++) {
      forms.push(<Input
        value={this.state.players[i]}
        key={i}
	name={i}
        type="text"
        placeholder={"Player " + (i + 1) + " Name (required)"}
        onChange={this.handleInputChange}
      />);
    }

    return forms;
  };

  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col size="md-6">
            <Container fluid="true">
            <form>
	      {this.render_forms()}
              <h2>Player Input</h2>
              <FormBtn onClick={this.handleButtonSubmit}>Submit Names</FormBtn>
            </form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
  export default NewRound;
