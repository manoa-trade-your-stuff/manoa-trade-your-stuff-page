import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Categories = () => (
  <Row className="justify-content-center pt-5">
    <Col xs={5}>
      <Col className="text-center" id="color"><h2>Category</h2></Col>
      <Col className="d-flex justify-content-center p-5 col px-md-5">
        <Link to="http://localhost:3000/CategoriesBook"><Button id="buttonSpace">Books</Button></Link>
        <Button id="buttonSpace">Clothings</Button>
        <Button id="buttonSpace">Electronics</Button>
        <Button id="buttonSpace">Households goods</Button>
        <Button id="buttonSpace">Others</Button>
        <Button id="buttonSpace"><a href="CategoriesBook" id="color">Books</a></Button>
      </Col>
    </Col>
  </Row>
);

export default Categories;
