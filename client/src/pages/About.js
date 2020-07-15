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
 Wolf is an at least 4 player golf betting game. The game begins by deciding the player order. The first player becomes the "wolf" and goes first. The rest of the players then make their first shot. If the wolf likes a person's shot, then that player joins the wolf's team. This action must be done before the next player makes their shot. If the wolf does not choose anyone, the bet is doubled. Each team then takes the lowest number of shots for the hole. For example, if the wolf shoots a 5 while the wolf's teammate shoots a 4, then the wolf team's score for the hole is 4. The same would apply to the other team (the "hunters"). Once the winner is decided. The next person in the order becomes the wolf and the process repeats through the order of players and loops back to the original wolf. During the final holes, adjusted for the number of players, the person who is losing the most becomes the wolf. This is updated for each hole. For example, in a group of 4, holes 17 and 18 would have the loser be the wolf.
 </p>



</Col>
</Row>
</Container>
    </div>
  );
}

export default About;
