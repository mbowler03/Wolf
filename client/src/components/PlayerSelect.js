import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, FormBtn } from "../components/Form";
import './style.css';


class PlayerSelect extends Component {
  state = {

      rest: ['mike', 'matt', 'sally'],
      bet: []
  };

  /*handleButtonClick = event => {
    event.preventDefault();
    API.post(this.name)
      .then(res => this.setState({ : res.data }))
      .catch(err => console.log(err));
  };*/

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

            <Container fluid>
            <h2>Wolf X select your player **optional**</h2>
{this.state.rest.map((player, index) => {
  return(
    <button type="button" class="btn btn-success btn-block" key={index} onClick={this.handleButtonSubmit}>{player}</button>
  )
})}


            </Container>

            <Container fluid>
            <form>
              <h2>Place your bet for Hole</h2>

              <Input name="hole-bet" placeholder="Hole bet amount (required)" />
              <FormBtn
                onClick={this.handleFormSubmit}
                type="success"
                className="input-lg"
              >
              SUBMIT AND START
              </FormBtn>
            </form>
            </Container>



            </Col>
            </Row>
      </Container>
    );
}
};
  export default PlayerSelect;
