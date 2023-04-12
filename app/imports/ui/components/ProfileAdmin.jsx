import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ProfileAdmin = ({ profile }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={profile.image} width={75} />
      <Card.Title>{profile.firstName} {profile.lastName}</Card.Title>
      <Card.Subtitle>{profile.studentId}</Card.Subtitle>
      <Card.Subtitle>{profile.email}</Card.Subtitle>
      <Card.Subtitle>{profile.phone}</Card.Subtitle>
      <Card.Subtitle>{profile.position}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{profile.description}</Card.Text>
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
