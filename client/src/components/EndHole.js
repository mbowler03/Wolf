import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, FormBtn } from "../components/Form";
import './style.css';


class EndHole extends Component {
  state = {

      players: [],
      amounts: []
  };


  /*handleInputChange = event => {
    const { name, value } = event.target;
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




            <Container fluid>
            <form>
              <h2>Wolf Team Score</h2>

              <Input name="hole-bet" placeholder="Hole Score (required)" />

            </form>
            </Container>

            <Container fluid>
            <form>
              <h2>Hunter Team Score</h2>

              <Input name="hole-bet" placeholder="Hole Score (required)" />
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
};
  export default EndHole;
