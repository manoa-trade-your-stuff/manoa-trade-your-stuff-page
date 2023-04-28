import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Complaints } from '../../api/Complaints/Complaints';
import ComplaintAdmin from '../components/ComplaintAdmin';

/* Renders a table containing all of the Item documents. Use <ItemItem> to render each row. */
const ListComplaintsAdmin = () => {
  console.log('listComplaints');
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, complaints } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Complaint documents.
    const subscription = Meteor.subscribe(Complaints.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Complaint documents
    const complaintcomplaint = Complaints.collection.find({}).fetch();
    console.log(rdy, complaintcomplaint);
    return {
      complaints: complaintcomplaint,
      ready: rdy,
    };
  }, []);
  console.log(ready, complaints);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Complaints List</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Incident</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => <ComplaintAdmin key={complaint._id} complaint={complaint} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListComplaintsAdmin;
