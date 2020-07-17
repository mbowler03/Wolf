import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, FormBtn } from "../components/Form";
import './style.css';


class PlayerSelect extends Component {
  state = {
    bet: 0,
    selected: false
  }

  componentDidMount() {this.props.setup()}

  betSubmit = () => this.props.next(parseInt(this.state.bet))

  changeTeam = event => {
    this.props.change(parseInt(event.target.name));
    this.setState({selected: true});
  }

  onChange = event => {
    this.setState({bet: event.target.value})
  }

  render_players = () => {
    if (!this.state.selected) {
      return this.props.rest.map((player, index) => {
	return (
          <button
            type="button"
            className="btn btn-success btn-block"
            key={index}
	    name={index}
            onClick={this.changeTeam}
          >
          {player}
          </button>
	);
      });
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Container fluid>
            <h2>Wolf {this.props.wolf[0]} your player **optional**</h2>
	      {this.render_players()}
            </Container>
            <Container fluid>
            <form>
              <h2>Place your bet for Hole</h2>
              <Input
	        name="hole-bet"
	        placeholder="Hole bet amount (required)"
		onChange={this.onChange}
	      />
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
