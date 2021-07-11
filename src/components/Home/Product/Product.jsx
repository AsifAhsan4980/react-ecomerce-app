import React from "react";

import { Card, Button } from "react-bootstrap";
import "./style.css";

const Product = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }} key={data.id}>
      <Card.Img variant="top" className="cart_image" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
