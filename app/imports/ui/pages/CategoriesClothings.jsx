import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const CategoriesClothings = () => (
  <Row className="justify-content-center">
    <Button id="homeButton"><a href="Categories" id="color">Home</a></Button>
    <Col xs={5}>
      <Col className="text-center pt-2" id="color"><h2>CLOTHINGS</h2></Col>
      Clothings
    </Col>
  </Row>
);

export default CategoriesClothings;
