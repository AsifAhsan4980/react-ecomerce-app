import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import ss1 from "../../assets/slideshow1.jpg";
import ss2 from "../../assets/slideshow2.jpg";
import ss3 from "../../assets/slideshow3.jpg";
import ss4 from "../../assets/slideshow4.jpg";

class Slideshow extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ss1} alt="First slide" />
          <Carousel.Caption>
            <h3>Ravishing Jamdani</h3>
            <p>Finest Weaven Tat Sharee staright from Narayangonj</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ss2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Fabulus Kanjeevaram</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ss3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ss4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slideshow;
