import React from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';

const EditProfile = () => (
  <Container className="my-5">
    <Row>
      <Col md={3} />
      <Col md={6}>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formStudentID">
                <Form.Label>Student ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPosition">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAbout">
                <Form.Label>About</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="secondary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} />
    </Row>
  </Container>
);

export default EditProfile;
