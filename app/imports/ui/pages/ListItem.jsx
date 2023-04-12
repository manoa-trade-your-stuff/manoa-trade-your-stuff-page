import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <Image roundedCircle src="/images/manoaseal_transparent.png" width="150px" />
      </Col>

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Aloha! Welcome to Manoa Trade Your Stuff</h1>
        <p>This is a site to buy and sell your stuff for the UH Manoa community</p>
      </Col>

    </Row>
  </Container>
);

export default Landing;
