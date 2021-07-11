import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo1.png";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <>
        <div fixed="top">
          <Navbar sm={12} md={8} lg={12} xl={12} bg="primary" variant="dark">
            <Container fluid>
              <Row className="mr-5">
                <Col>
                  <Navbar.Brand href="#home">
                    <img
                      src={logo}
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </Navbar.Brand>
                </Col>
              </Row>
              <Nav className="mr-auto">
                <Nav.Link className="mr-4" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="mr-4" href="#features">
                  Gallery
                </Nav.Link>
                <Nav.Link className="mr-4" href="#pricing">
                  Contact Us
                </Nav.Link>
                <Nav.Link className="mr-4" href="#pricing">
                  About
                </Nav.Link>
              </Nav>
              <Nav className="mr-auto"></Nav>
              <Row>
                <Col>
                  {" "}
                  <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <Button variant="outline-light">Search</Button>
                  </Form>
                </Col>
              </Row>
              <Nav className="mr-auto"></Nav>
              <Button className="btn btn-primary btn-lg">
                <AiOutlineShoppingCart />
                <Badge bg="success">0</Badge>
              </Button>
              <Nav className="mr-auto"></Nav>
              <Row>
                <Col>
                  <Button className="btn btn-dark btn-md">Log In</Button>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

export default NavigationBar;
