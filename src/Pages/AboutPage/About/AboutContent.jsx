import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AsifImg from "../../../assets/asif.png";
import AdminCard from "./AdminCard/AdminCard";

const aboutInfo = [
  {
    id: 1,
    name: "Asif Ahsan",
    designation: "Web Developer",
    descrption: "React Bootrap Developer",
    since: "2019",
    age: "25",
    image:
      "https://drive.google.com/file/d/1KerC9B20hm74g6tff1o_SooBoDKSaQeT/view?usp=sharing",
  },
  {
    id: 2,
    name: "Asif Ahsan",
    designation: "Web Developer",
    descrption: "React Bootrap Developer",
    since: "2019",
    age: "25",
    image: { AsifImg },
  },
];

class AboutContent extends Component {
  render() {
    return (
      <Container>
        <div></div>
        {aboutInfo.map((admin, index) => {
          return (
            <div key={admin.id}>
              <AdminCard admindata={admin} />
            </div>
          );
        })}
      </Container>
    );
  }
}

export default AboutContent;
