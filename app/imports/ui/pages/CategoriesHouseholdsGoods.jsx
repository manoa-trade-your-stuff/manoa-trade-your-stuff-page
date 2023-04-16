import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const CategoriesHouseholdsGoods = () => (
  <Row className="justify-content-center">
    <Button id="homeButton"><a href="Categories" id="color">Home</a></Button>
    <Col xs={5}>
      <Col className="text-center pt-2" id="color"><h2>HOUSEHOLDS GOODS</h2></Col>
      Households Goods
    </Col>
  </Row>
);

export default CategoriesHouseholdsGoods;
