import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import Profile from '../components/Profile';
import { Profiles } from '../../api/profile/Profiles';
import UserItem from '../components/UserItem';
import { Items } from '../../api/item/Item';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const UserProfile = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, profiles, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription1 = Meteor.subscribe(Profiles.userPublicationName);
    const subscription2 = Meteor.subscribe(Items.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription1.ready() && subscription2.ready();
    // Get the Profile documents
    const profileItems = Profiles.collection.find({}).fetch();
    const items = Items.collection.find({}).fetch();

    return {
      profiles: profileItems,
      items: items,
      ready: rdy,
    };
  }, []);

  return (
    ready ? (
      <Container className="py-3">
        <Row className="justify-content-center">
          <Col>
            <Col className="text-center">
              <h2>Profile</h2>
            </Col>
            <Row xs={1} md={2} lg={3} className="g-4">
              <Col>
                {profiles.map((profile) => (<Profile key={profile._id} profile={profile} />))}
              </Col>
              <Col>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Condition</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (<UserItem key={item._id} item={item} />))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    ) : <LoadingSpinner />
  );
};
export default UserProfile;