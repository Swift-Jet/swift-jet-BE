const express = require("express");
const http = require("http");
const color = require("colors");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

const server = http.createServer(app);

const db = require("./config/db");
db.connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SwiftJet Backend API is Live");
});

const airport = require("./routes/api/v1/airport");
const aircraft = require("./routes/api/v1/aircraft");
const user = require("./routes/api/v1/user");
const admin = require("./routes/api/v1/admin")

app.use("/api/v1/airport", airport);
app.use("/api/v1/aircraft", aircraft);
app.use("/api/v1/user", user);
app.use("/api/v1/admin", admin);
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`);
});
