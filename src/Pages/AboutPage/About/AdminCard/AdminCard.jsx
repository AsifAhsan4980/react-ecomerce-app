import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Asifimg from "../../../../assets/asif.png";
import "./style.css";

const AdminCard = ({ admindata }) => {
  return (
    <div>
      <Container className="background">
        <Row>
          <Col>
            <br />
            <div className="boxone p-3 text-center">
              <h1>Hello</h1>
              <p>
                I am a Java and Front End Developer skilled in Angular, React,
                OOP, MVC, UX/UI design, graphics design, and animation. My main
                goal of work is providing clean code, well documentation, code
                reusability, proper software architecture, and a user-friendly
                interface. Whether a one-page static website or building complex
                software result of my work gives me ample joy. Learning new and
                creative things is one of my fascinations.
              </p>
            </div>
          </Col>
          <Col>
            <Image src={Asifimg} width={400} />
          </Col>
          <Col>
            <div className="backgroundone">
              <h4>Details</h4>
              <br />
              <div>
                <b> Name : </b>
              </div>
              <div>{admindata.name}</div>
              <div>
                <b> Designation : </b>{" "}
              </div>
              <div>{admindata.designation}</div>
              <div>
                <b> Age : </b>{" "}
              </div>
              <div>{admindata.age} Years</div>
            </div>
            <div className="backgroundtwo text-center">
              <h4>"I am a {admindata.descrption}"</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default AdminCard;
