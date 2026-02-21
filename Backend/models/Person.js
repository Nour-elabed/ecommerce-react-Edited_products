import mongoose from "mongoose";
import test from "node:test";
const personSchema= new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type : Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // we use unique:true to ensure that each email is unique in the database (not available in express5) : we can also use mongoose-unique-validator plugin to validate the uniqueness of the email field if we delete people collection and run post req again in the database then we will get error of duplicate collection in the 2nd attempt of sending
  }
  userOrder: { //An order is a record of something a user wants to buy or has bought.
    // we can also use an array of objects to store multiple orders for a user (not available in express5) : userOrder: [{ type: Object }] or we can use a separate Order model and reference it in the Person model (not available in express5) : userOrder: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
    type: Object,
  default:{test:'test value'} //This schema field defines userOrder as a flexible object that can store any key-value data related to a user’s order, and if no order data is provided, it automatically defaults to an empty object.
},
},{// The timestamps option in Mongoose automatically adds two fields to the schema: createdAt and updatedAt. These fields will store the date and time when a document is created and last updated, respectively. This is useful for tracking when records are added or modified in the database.
  timestamps: true, minimize: false // we use minimize:false to prevent Mongoose from removing empty objects from the database, which is important for our userOrder field that defaults to an empty object. By setting minimize to false, we ensure that the userOrder field will always be stored in the database, even if it is empty.
}
)
export const Person= mongoose.model('Person',personSchema)
