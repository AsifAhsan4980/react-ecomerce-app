import React, { Component } from "react";
import Navbar from "../components/NavBar/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/HomePage/Homepage.jsx";
import About from "../Pages/AboutPage/AboutPage.jsx";

class ReactRouter extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default ReactRouter;
