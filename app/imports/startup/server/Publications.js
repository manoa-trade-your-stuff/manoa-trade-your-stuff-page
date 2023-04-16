import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Items } from '../../api/item/Item';
import { Profiles } from '../../api/profile/Profiles';
import { Complaints } from '../../api/Complaints/Complaints';

// Item
Meteor.publish(Items.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Items.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Items.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Items.collection.find();
  }
  return this.ready();
});

// Profile
Meteor.publish(Profiles.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Profiles.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Profiles.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Profiles.collection.find();
  }
  return this.ready();
});

// Complaint
Meteor.publish(Complaints.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Complaints.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Complaints.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Complaints.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
