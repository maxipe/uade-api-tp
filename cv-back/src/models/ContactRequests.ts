import mongoose, { Schema } from "mongoose";

const ContactRequestsSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: Number,
});

const ContactRequests = mongoose.model(
  "ContactRequests",
  ContactRequestsSchema
);

export default ContactRequests;
