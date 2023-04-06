import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Categories = () => (
  <Row className="justify-content-center pt-5" id="Middle">
    <Col className="d-flex justify-content-center">
      <h1>Category</h1>
    </Col>
    <Col>
      <h1><Button variant="danger" id="buttonSpace">BOOK</Button></h1>
      <h1><Button variant="danger" id="buttonSpace">STUFF</Button></h1>
    </Col>
  </Row>
);

export default Categories;
