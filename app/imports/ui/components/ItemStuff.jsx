import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ItemStuff = ({ item }) => (
  <tr>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
    <td>{item.category}</td>
    <td>
      <Link to={`/edit/${item._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
ItemStuff.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    category: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ItemStuff;
