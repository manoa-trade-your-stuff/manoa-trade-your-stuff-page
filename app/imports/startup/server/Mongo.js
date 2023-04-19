import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/Item.js';
import { Profiles } from '../../api/profile/Profiles';
import { Complaints } from '../../api/Complaints/Complaints';

// ItemCollection
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Items.collection.insert(data);
};

if (Items.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default Items.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}
// ProfileCollection
const addProfile = (profile) => {
  console.log(`Adding: ${profile.lastName} (${profile.owner})`);
  Profiles.collection.insert(profile);
};

if (Profiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultProfiles) {
    console.log('Creating default profiles.');
    Meteor.settings.defaultProfiles.forEach(profile => addProfile(profile));
  }
}

// ComplaintCollections
const addComplaint = (complaint) => {
  console.log(`Adding: ${complaint.lastName} (${complaint.owner})`);
  Complaints.collection.insert(complaint);
};

if (Complaints.collection.find().count() === 0) {
  if (Meteor.settings.defaultComplaints) {
    console.log('Creating default complaints.');
    Meteor.settings.defaultComplaints.forEach(complaint => addComplaint(complaint));
  }
}
