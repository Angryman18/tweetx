const mongoose = require("mongoose");
const dotEnv = require("dotenv");

console.log(process.env.NODE_ENV);
dotEnv.config({ path: "./.env.local" });

const db = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_MONGO_URI);
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    console.log("Connection is established");
    process.exit(0);
  } catch (err) {
    console.log("Error connecting to Mongo", err);
    process.exit(1);
  }
};

db();
