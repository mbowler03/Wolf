import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, FormBtn } from "../components/Form";



class BeginHole extends Component {
  state = {

      WolfScore: "",
      HunterScore: ""
  };


  scoreChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  scoreSubmit = event => {
    event.preventDefault();
    let winner = "";
    const wolfScore = parseInt(this.state.WolfScore)
    const hunterScore = parseInt(this.state.HunterScore)

    if(wolfScore < hunterScore) {
      winner = "wolf";
    } else if(hunterScore < wolfScore) {
      winner = "hunter";
    } else {
      winner = "none";
    }
    this.props.next(winner);
  }

  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col size="md-6">
            <Container fluid="true">
            <form>
             <h1>Wolf {this.props.wolf[0]}</h1>
              <h2>Hole {this.props.hole}</h2>
              <br></br>

              <h2>Wolf Team Score</h2>

              <Input name="WolfScore" value={this.state.WolfScore} onChange= {this.scoreChange} placeholder="Hole Score (required)" />

            </form>
            </Container>

            <Container fluid>
            <form>
              <h2>Hunter Team Score</h2>

              <Input name="HunterScore" value={this.state.HunterScore} onChange={this.scoreChange} placeholder="Hole Score (required)" />
              <FormBtn
                onClick={this.scoreSubmit}
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
  export default BeginHole;
