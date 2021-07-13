import React, { Component } from "react";
import Coverphoto from "../../../assets/about.jpg";
import { Container } from "react-bootstrap";
import "../../../App.css";

class Cover extends Component {
  state = {};
  render() {
    return (
      <Container>
        <div
          className=" text-center text-light cover"
          style={{
            backgroundImage: `url(${Coverphoto})`,
          }}
        >
          <br />
          <br />
          <div>
            <h1>About Us</h1>
            <h5>Lets meet our Board Members</h5>
          </div>
          <br />
          <br />
        </div>
      </Container>
    );
  }
}

export default Cover;
