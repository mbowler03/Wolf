import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API.js"

class NewRound extends Component {
  state = {
  
      players: []
  };



  handleButtonSubmit = event => {
    event.preventDefault();
    API.postPlayers(this.state.players)
      .then(res => this.setState({ players:res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Wolf</h1>
              <h2>New Round</h2>
            </Jumbotron>
            

            <Container fluid>
            <form>
              <h2>Player Input</h2>
              <Input value={this.state.players[0]} name="player1" placeholder="Player 1 Name (required)" />
              <Input value={this.state.players[1]} name="player2" placeholder="Player 2 Name (required)" />
              <Input name={this.state.players[2]} name="player3" placeholder="Player 3 Name (required)" />
              <Input name={this.state.players[3]}name-="player4" placeholder="Player 4 Name (required)" />
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