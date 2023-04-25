import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Item table. See pages/ListItem.jsx. */
const Complaint = ({ complaint }) => (
  <tr>
    <td>{complaint.firstName}</td>
    <td>{complaint.lastName}</td>
    <td>{complaint.incident}</td>
  </tr>
);

// Require a document to be passed to this component.
Complaint.propTypes = {
  complaint: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    incident: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Complaint;
