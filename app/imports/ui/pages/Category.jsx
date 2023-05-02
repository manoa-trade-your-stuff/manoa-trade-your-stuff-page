import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Items } from '../../api/item/Item';
import Item from '../components/Item';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Item documents. Use <Item> to render each row. */
const Category = () => {
  const { category } = useParams();
  console.log(category);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item documents.
    const subscription = Meteor.subscribe(Items.usersPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Item documents
    const item = Items.collection.find({ category }).fetch();
    return {
      items: item,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Button id="homeButton" style={{ backgroundColor: 'transparent', border: 'none' }}><a href="/categories" id="color">Back to Categories</a></Button>
        <Col md={7}>
          <Col className="text-center">
            <h2>Item Lists</h2>
          </Col>
          <Table striped bordered hover variant="light" style={{ border: '3px solid black' }}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Condition</th>
                <th>Category</th>
                <th>Description</th>
                <th>Owner/ Contact Information</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => <Item key={item.category} item={item} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Category;
