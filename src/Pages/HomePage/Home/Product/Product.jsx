import React from "react";
import {
  AiOutlineLike,
  AiOutlineShoppingCart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Card, Row, Col } from "react-bootstrap";
import "./style.css";

const Product = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }} key={data.id}>
      <Card.Img variant="top" className="cart_image" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Row>
          <Col className="text-center text-lg">
            <AiOutlineLike />
          </Col>
          <Col className="text-center">
            <AiOutlineShareAlt />
          </Col>
          <Col className="text-center">
            <AiOutlineShoppingCart />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Product;
