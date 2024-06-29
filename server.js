const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const next = require("next");
const express = require("express");

dotEnv.config({ path: "./.env.local" });
const dev = process.env.NODE_ENV === "development";
const app = next({ dev, port: 3001 });
const handler = app.getRequestHandler();
const server = express();

console.log("Environment ", process.env.NODE_ENV);

app.prepare().then(async () => {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
  server.all("*", (req, res) => {
    return handler(req, res);
  });
  server.listen(3001, (err) => {
    if (err) process.exit(1);
    console.log("Server is runnning at 3001");
  });
});
