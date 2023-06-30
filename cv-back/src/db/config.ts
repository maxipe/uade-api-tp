import "dotenv/config.js";
import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING ?? "");
    console.log("DB online!");
  } catch (err) {
    console.error(err);
    throw new Error("Error connecting to DB");
  }
};

export default dbConnection;
