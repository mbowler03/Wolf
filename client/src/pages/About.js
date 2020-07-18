import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import './style.css';


function About() {
  return (
    <div>

      <Container>
      <Row>
          <Col size="md-12">
          <h1>How To Play </h1>
<p>
Wolf is a 4 player golf betting game. Begin your round by entering the four player names and pressing submit. The rest of the players then make their first shot. If the wolf likes a person's shot, then the Wolf has the option of choosing that player as a hole partner and enters an agreed hole bet amount and presses "submit". If the wolf does not choose anyone, double the bet amount entered. Each team then enters the lowest number of shots for the hole. For example, if the wolf shoots a 5 while the wolf's teammate shoots a 4, then the wolf team's score for the hole is 4. The same also applies to the "hunter" team. Once the winner is decided and the winning amounts are displayed, the next person in the order becomes the wolf and the process repeats through the order of players. On hole 17 and 18, the person who is losing the most money becomes the wolf. 
 </p>



</Col>
</Row>
</Container>
    </div>
  );
}

export default About;
