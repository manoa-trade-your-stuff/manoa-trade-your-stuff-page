import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoriesBook = () => (
  <Row className="justify-content-center">
    <Button id="homeButton"><a href="Categories" id="color">Home</a></Button>
    <Col xs={5}>
      <Col className="text-center pt-2" id="color"><h2>BOOKS</h2></Col>
      Books
    </Col>
  </Row>
);

export default CategoriesBook;
