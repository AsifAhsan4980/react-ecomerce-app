import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Slideshow from "../Slideshow/slideshow";
import jamdani from "../../assets/jamdani.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Slideshow />
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h3>Jamdani</h3>
            </Col>
          </Row>
        </Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" roundedCircle src={jamdani} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
