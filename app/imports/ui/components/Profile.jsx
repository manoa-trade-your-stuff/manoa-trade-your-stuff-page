import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Profile = ({ profile }) => (
  <Card className="h-100" style={{ width: '400px' }}>
    <Card.Header>
      <Image src={profile.image} width={300} />
      <Card.Title>{profile.firstName} {profile.lastName}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle> Student ID: {profile.studentId}</Card.Subtitle>
      <Card.Subtitle> Email: {profile.email}</Card.Subtitle>
      <Card.Subtitle> Phone: {profile.phone}</Card.Subtitle>
      <Card.Subtitle> Position: {profile.position}</Card.Subtitle>
      <Card.Subtitle> About: {profile.description}</Card.Subtitle>
      <Link to={`/editProfile/${profile._id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Profile.propTypes = {
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
    _id: PropTypes.string,
  }).isRequired,
};

export default Profile;
