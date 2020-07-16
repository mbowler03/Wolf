import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, FormBtn } from "../components/Form";
import './style.css';


class PlayerSelect extends Component {
state = {
bet: 0
}
  componentDidMount() {this.props.setup()} 
 
betSubmit = () => this.props.next(this.state.bet)


onChange = event => {
  this.setState({bet: parseInt(event.target.value)})
}
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

            <Container fluid>
            <h2>Wolf {this.props.wolf[0]} your player **optional**</h2>
{this.props.rest.map((player, index) => {
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
                onClick={this.betSubmit}
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
