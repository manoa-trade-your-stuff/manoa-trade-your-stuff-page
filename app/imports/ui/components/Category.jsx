import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Category = ({ category }) => (
  <Card className="h-100" style={{ width: '400px' }}>
    <Card.Header>
      <Image src={category.image} width={300} />
      <Card.Title>{category.name}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle> Student ID: {category.studentId}</Card.Subtitle>
      <Card.Subtitle> Email: {category.email}</Card.Subtitle>
      <Card.Subtitle> Phone: {category.phone}</Card.Subtitle>
      <Card.Subtitle> Position: {category.position}</Card.Subtitle>
      <Card.Subtitle> About: {category.description}</Card.Subtitle>
      <Link to={`/editcategory/${category._id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Category.propTypes = {
  category: PropTypes.shape({
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

export default Category;
