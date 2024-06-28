const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const next = require("next");
const { createServer } = require("http");

dotEnv.config({ path: "./.env.local" });
const dev = process.env.NODE_ENV === "development";
const app = next({ dev, port: 3001 });
const handler = app.getRequestHandler();

console.log("Environment ", process.env.NODE_ENV)

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
      await handler(req, res);
    } catch (err) {
      process.exit(1);
    }
  });
  server.listen(3001, () => {
    console.log("Server is runnning at 3001");
  });
});
