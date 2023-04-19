import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The CategoryCollection. It encapsulates state and variable values for Category.
 */
class CategoryCollection {
  constructor() {
    // The name of this collection.
    this.name = 'CategoryCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      quantity: Number,
      condition: {
        type: String,
        allowedValues: ['excellent', 'good', 'fair', 'poor'],
        defaultValue: 'good',
      },
      category: {
        type: String,
        allowedValues: ['Books', 'Clothings', 'Electronics', 'Household', 'Others'],
        defaultValue: 'Books',
      },
      image: String,
      description: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CategoryCollection.
 * @type {CategoryCollection}
 */
export const Category = new CategoryCollection();
