import React from 'react';
import { Card, ListGroup, ListGroupItem, Badge, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserProfile = () => (
  <Container className="my-5">
    <Row>
      <Col md={3}>
        <Card style={{ backgroundColor: 'whitesmoke' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPFrCKQ1lCYG-z6jbyvb2CBc2jfwAStlQ7Q&usqp=CAU" />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>JON</Card.Title>
            <Card.Text>
              <p style={{ color: 'black' }}>Student ID: 12345678</p>
              <p style={{ color: 'black' }}>Email: xxxx@hawaii.edu</p>
              <p style={{ color: 'black' }}>Phone: +1(808)123-4567</p>
              <p style={{ color: 'black' }}>Position: Student</p>
            </Card.Text>
            <Link to="/editProfile" className="btn btn-secondary">Edit Profile</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8}>
        <ListGroup style={{ backgroundColor: 'whitesmoke' }}>
          <ListGroupItem>
            <h5>Reputation Points:</h5>
            <Badge bg="danger">100/100</Badge>
          </ListGroupItem>
          <ListGroupItem style={{ height: '150px' }}>
            <h5>Recent Sold</h5>
            <img src="images/meteor-logo.png" alt="item" className="mr-2" style={{ width: '100px' }} />
          </ListGroupItem>
          <ListGroupItem style={{ height: '150px' }}>
            <h5>Recent Bought</h5>
            <img src="images/meteor-logo.png" alt="item" className="mr-2" style={{ width: '100px' }} />
          </ListGroupItem>
          <ListGroupItem style={{ height: '265px' }}>
            <h5>About</h5>
            <p style={{ color: 'black' }}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default UserProfile;
