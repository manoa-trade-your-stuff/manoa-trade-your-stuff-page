import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Categories = () => (
  <Row className="justify-content-center pt-5">
    <Col xs={5}>
      <Col className="text-center" id="color"><h2>Category</h2></Col>
      <Col className="d-flex justify-content-center p-5 col px-md-5">
        <Button id="buttonSpace"><a href="CategoriesBook" id="color">Books</a></Button>
        <Button id="buttonSpace"><a href="CategoriesClothings" id="color">Clothings</a></Button>
        <Button id="buttonSpace"><a href="CategoriesElectronics" id="color">Electronics</a></Button>
        <Button id="buttonSpace"><a href="CategoriesHouseholdsGoods" id="color">Households goods</a></Button>
        <Button id="buttonSpace"><a href="CategoriesOthers" id="color">Others</a></Button>
      </Col>
    </Col>
  </Row>
);

export default Categories;
