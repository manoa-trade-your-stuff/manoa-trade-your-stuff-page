import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const CategoriesOthers = () => (
  <Row className="justify-content-center">
    <Button id="homeButton"><a href="Categories" id="color">Home</a></Button>
    <Col xs={5}>
      <Col className="text-center pt-2" id="color"><h2>OTHERS</h2></Col>
      Others
    </Col>
  </Row>
);

export default CategoriesOthers;
