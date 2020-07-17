import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { FormBtn } from "../components/Form";
import './style.css';

class EndHole extends Component {
  onClick = () => this.props.next();

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Container fluid>
	      <Row>
	        <Col size="6">
	          <ul>
	            {this.props.players.map(player => <li key={player}>{player}</li>)}
		  </ul>
	        </Col>
	        <Col size="6">
	          <ul>
	            {this.props.amounts.map((amount, i) => <li key={i}>{amount}</li>)}
	          </ul>
  	        </Col>
	      </Row>
            </Container>
            <Container fluid>
              <FormBtn
                onClick={this.onClick}
                type="success"
                className="input-lg"
              >
              {this.props.hole === 18 ? "END" : "NEXT HOLE"}
              </FormBtn>
            </Container>
          </Col>
        </Row>
      </Container>
    );
}
};
  export default EndHole;
