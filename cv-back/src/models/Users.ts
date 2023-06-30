import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema({
  username: String,
  password: String,
  date: Date,
});

const Users = mongoose.model("Users", UsersSchema);

export default Users;
