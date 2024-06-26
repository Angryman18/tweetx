import mongoose, { mongo } from "mongoose";
import config from "@/constants/config";

const dbConnect = async () => {
  try {
    console.log(config.MONGO_URI);
    await mongoose.connect(config.MONGO_URI);
    console.log("Connection is established");
  } catch (err) {
    console.log("Error connecting to Mongo", err);
    return Promise.reject("Connectin Failed");
  }
};

export const dbDisconnect = async () => await mongoose.connection.close();

export default dbConnect;
