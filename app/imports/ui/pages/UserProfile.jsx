import React from 'react';
import { Card, Button, ListGroup, ListGroupItem, Badge, Container, Row, Col } from 'react-bootstrap';

const UserProfile = () => (
  <Container className="my-5">
    <Row>
      <Col xs={12} md={4}>
        <Card style={{ backgroundColor: 'green' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPFrCKQ1lCYG-z6jbyvb2CBc2jfwAStlQ7Q&usqp=CAU" />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>NULL</Card.Title>
            <Card.Text>
              <p style={{ color: 'white' }}>Student ID: 12345678</p>
              <p style={{ color: 'white' }}>Email: xxxx@hawaii.edu</p>
              <p style={{ color: 'white' }}>Phone: +1(808)123-4567</p>
              <p style={{ color: 'white' }}>Position: Student</p>
            </Card.Text>
            <Button variant="secondary">Edit profile</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={8}>
        <ListGroup>
          <ListGroupItem>
            <h5>Reputation Points:</h5>
            <Badge bg="danger">100/100</Badge>
          </ListGroupItem>
          <ListGroupItem>
            <h6>Recent Sold</h6>
            <img src="images/meteor-logo.png" alt="item" className="mr-2" style={{ width: '50px' }} />
          </ListGroupItem>
          <ListGroupItem>
            <h6>Recent Bought</h6>
            <img src="images/meteor-logo.png" alt="item" className="mr-2" style={{ width: '50px' }} />
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  </Container>
);
export default UserProfile;
