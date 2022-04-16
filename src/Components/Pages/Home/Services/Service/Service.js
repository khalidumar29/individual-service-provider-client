import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { name, img, price, description } = data;
  return (
    <Card style={{ width: "18rem", borderRadius: "5px" }}>
      <Card.Img variant='top' src={img} />
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text
          style={{ color: "black", fontSize: "18px", fontWeight: 450 }}
        >
          $ {price}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant='primary'>
          <Link style={{ color: "#fff", textDecoration: "none" }} to=''>
            Check Out
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Service;
