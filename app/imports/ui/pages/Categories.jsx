import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Categories = () => (
  <Row className="justify-content-center pt-5">
    <Col xs={10} md={8} lg={8}>
      <div className="text-center">
        <h2>Categories</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center py-5 px-md-5">
        <a href="category/Books" className="d-flex flex-column align-items-center justify-content-center mx-3 category-link">
          <img src="images/book-image.jpg" alt="Books" className="img-fluid category-img" />
          <span className="category-text">BOOKS</span>
        </a>
        <a href="category/Clothing" className="d-flex flex-column align-items-center justify-content-center mx-3 category-link">
          <img src="images/clothing-image.jpg" alt="Clothing" className="img-fluid category-img" />
          <span className="category-text">CLOTHING</span>
        </a>
        <a href="category/Electronics" className="d-flex flex-column align-items-center justify-content-center mx-3 category-link">
          <img src="images/electronics-image.jpg" alt="Electronics" className="img-fluid category-img" />
          <span className="category-text">ELECTRONICS</span>
        </a>
        <a href="category/Household" className="d-flex flex-column align-items-center justify-content-center mx-3 category-link">
          <img src="images/household-image.jpg" alt="Household Goods" className="img-fluid category-img" />
          <span className="category-text">HOUSEHOLD GOODS</span>
        </a>
        <a href="category/Others" className="d-flex flex-column align-items-center justify-content-center mx-3 category-link">
          <img src="images/others-image.png" alt="Others" className="img-fluid category-img" />
          <span className="category-text">OTHERS</span>
        </a>
      </div>
    </Col>
  </Row>
);

export default Categories;
