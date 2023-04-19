import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Items } from '../../api/item/Item';
import LoadingSpinner from '../components/LoadingSpinner';
import Item from '../components/Item';

/* Renders a table containing all of the Item documents. Use <Item> to render each row. */
const Category = () => {
  const { category } = useParams();
  console.log(category);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Items documents.
    const subscription = Meteor.subscribe(Items.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Items documents
    const userItems = Items.collection.find({ category }).fetch();
    return {
      items: userItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Item List</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Condition</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => <Item key={item._id} item={item} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Category;
