import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const AdminHome = () => {
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col md={7}>
        <Col className="text-center">
          <h2>Item List</h2>
        </Col>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Condition</th>
              <th>Category</th>
              <th>Description</th>
              <th>Edit</th>
            </tr>
          </thead>
        </Table>
      </Col>
    </Row>
  </Container>
};

export default AdminHome;