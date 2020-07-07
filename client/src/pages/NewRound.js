import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, FormBtn } from "../components/Form";


class NewRound extends Component {
  state = {
  
      rest: [],
      wolf: []
  };


  handleInputChange = event => {
    const { rest, value } = event.target;
    this.setState({
      [rest]: value
    });
  };

  /*handleFormSubmit = event => {
    event.preventDefault();
    API.post(this.state.wolf)
      .then(res => this.setState({ : res.data }))
      .catch(err => console.log(err));
  }; */

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
              <Input value={this.player} name="player1" placeholder="Player 1 Name (required)" />
              <Input value={this.player} name="player2" placeholder="Player 2 Name (required)" />
              <Input name="player3" placeholder="Player 3 Name (required)" />
              <Input name="player4" placeholder="Player 4 Name (required)" />
              <FormBtn onClick={this.handleFormSubmit}>Submit Names</FormBtn>
            </form>
            </Container>

            <Container fluid>
            <form>
              <h2>Team Hunter</h2>

              <Input name="hunter-score" placeholder="Score Number (required)" />
              <FormBtn
                onClick={this.handleFormSubmit}
                type="success"
                className="input-lg"
              >
              SUBMIT
              </FormBtn>
            </form>
            </Container>

            <Container>
            <form>
              <h2>Team Wolf</h2>
              <Input name="wolf-score" placeholder="Score Number (required)" />
              <FormBtn
                onClick={this.handleFormSubmit}
                type="success"
                className="input-lg"
              >
              SUBMIT
              </FormBtn>
            </form>
            </Container>

            </Col>
            </Row>
      </Container>
    );
  }
}
  export default NewRound;