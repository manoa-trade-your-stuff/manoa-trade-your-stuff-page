import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Item table. See pages/ListItem.jsx. */
const ComplaintAdmin = ({ complaint }) => (
  <tr>
    <td>{complaint.firstName}</td>
    <td>{complaint.lastName}</td>
    <td>{complaint.incident}</td>
    <td>{complaint.owner}</td>
  </tr>
);

// Require a document to be passed to this component.
ComplaintAdmin.propTypes = {
  complaint: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    incident: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default ComplaintAdmin;
