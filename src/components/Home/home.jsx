import React from "react";
import Product from "./Product/Product";
import { Container, Row, Col } from "react-bootstrap";
import Slideshow from "../Slideshow/slideshow";

const cardInfo = [
  {
    id: 1,
    name: "Shoes",
    descrption: "Running shoes",
    price: "$50",
    image:
      "https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/10/shoe-companies.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000",
  },
  {
    id: 3,
    name: "Headphones",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: 4,
    name: "Mobile",
    descrption: "Apple MAcbook",
    price: "$10",
    image: "https://images.indianexpress.com/2020/09/Nokia-newlaunches.jpg",
  },
  {
    id: 5,
    name: "Guitar",
    descrption: "Apple MAcbook",
    price: "$10",
    image: "https://ruach-music.com/wp-content/uploads/2018/11/1-pw.jpg",
  },
  {
    id: 6,
    name: "Watch",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://www.iwc.com/content/dam/homepage/ww-2021/IW503605_tile_1.717.jpg.transform.article_image_335_2x.jpeg",
  },
  {
    id: 7,
    name: "Camera",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-23..1570842461.jpg",
  },
  {
    id: 8,
    name: "Jacket",
    descrption: "Apple MAcbook",
    price: "$10",
    image:
      "https://static.contrado.com/resources/images/2019-8/135332/custom-bomber-jacket-1048935_l.jpg",
  },
];

const Home = () => {
  // const renderCard = (card, index) => {
  //   <Card style={{ width: "18rem" }} key={(index, console.log(index))}>
  //     <Card.Img variant="top" roundedCircle src={card.image} />
  //     <Card.Body>
  //       <Card.Title>{card.name}</Card.Title>
  //       <Card.Text>{card.description}</Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>;
  // };

  return (
    <main>
      <Slideshow />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h3>Jamdani</h3>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          {cardInfo.map((product, index) => {
            return (
              <Col lg={3} sm={6} md={4} xl={3} className="mb-4">
                <Product key={index} data={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default Home;
