import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ProfileAdmin = ({ profile }) => (
  <Card className="h-100 mx-auto" style={{ width: '300px', fontFamily: 'Trebuchet MS, sans-serif' }}>
    <Card.Header>
      <Image src={profile.image} width={150} />
    </Card.Header>
    <Card.Body>
      <Card.Title className="mb-3" style={{ fontSize: '30px', fontWeight: 'bold' }}>{profile.firstName} {profile.lastName}</Card.Title>
      <Card.Subtitle className="mb-3" style={{ fontSize: '15px', fontWeight: 'bold' }}>Student ID: {profile.studentId}</Card.Subtitle>
      <Card.Subtitle className="mb-3" style={{ fontSize: '15px', fontWeight: 'bold' }}>Email: {profile.email}</Card.Subtitle>
      <Card.Subtitle className="mb-3" style={{ fontSize: '15px', fontWeight: 'bold' }}>Phone: {profile.phone}</Card.Subtitle>
      <Card.Subtitle className="mb-3" style={{ fontSize: '15px', fontWeight: 'bold' }}>Position: {profile.position}</Card.Subtitle>
      <Card.Subtitle className="mb-3" style={{ fontSize: '15px', fontWeight: 'bold' }}>About: {profile.description}</Card.Subtitle>
      <footer className="blockquote-footer">{profile.owner}</footer>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
ProfileAdmin.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    studentId: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.number,
    position: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default ProfileAdmin;
