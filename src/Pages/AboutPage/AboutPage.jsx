import React, { Component } from "react";
import Cover from "./About/Cover.jsx";
import AboutContent from "./About/AboutContent.jsx";

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Cover />
        <br />
        <AboutContent />
      </div>
    );
  }
}

export default AboutPage;
