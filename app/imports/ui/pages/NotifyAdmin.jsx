import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function NotifyAdmin() {
  const [userInvolved, setUserInvolved] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');

  const handleUserInvolvedChange = (event) => {
    setUserInvolved(event.target.value);
  };

  const handleIncidentDescriptionChange = (event) => {
    setIncidentDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the user's input here (e.g. store it in a database, send an email notification, etc.)
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Incident Reporting</Card.Title>
              <form onSubmit={handleSubmit}>
                <label htmlFor="user-involved">User Involved:</label>
                <input
                  type="text"
                  id="user-involved"
                  value={userInvolved}
                  onChange={handleUserInvolvedChange}
                />

                <label htmlFor="incident-description">Describe Incident in Detail:</label>
                <input
                  type="text"
                  id="incident-description"
                  value={incidentDescription}
                  onChange={handleIncidentDescriptionChange}
                />

                <button type="submit">Submit</button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NotifyAdmin;
