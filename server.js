const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const next = require("next");
const express = require("express");

dotEnv.config({ path: "./.env.local" });
const dev = process.env.NODE_ENV === "development";
const app = next({ dev, port: 3001 });
const handler = app.getRequestHandler();
const expressApp = express();

console.log("Environment ", process.env.NODE_ENV);

app.prepare().then(() => {
  expressApp.use(async (req, res) => {
    try {
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
      handler(req, res);
    } catch (err) {
      process.exit(1);
    }
  });
  expressApp.listen(3001, () => {
    console.log("Server is runnning at 3001");
  });
});
