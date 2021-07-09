import React, { Component } from "react";
import NavigationBar from "../components/NavBar/NavigationBar.jsx";
import Home from "../components/Home/home.jsx";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar fixed="top" />
        <Home />
      </div>
    );
  }
}

export default Homepage;
