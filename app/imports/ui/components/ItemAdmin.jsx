import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Item (Admin) table. See pages/ListItemAdmin.jsx. */
const ItemAdmin = ({ item }) => (
  <tr>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
    <td>{item.condition}</td>
    <td>{item.category}</td>
    <td>{item.description}</td>
    <td>{item.owner}</td>
    <td>
      <Link to={`/editItem/${item._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
ItemAdmin.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default ItemAdmin;
