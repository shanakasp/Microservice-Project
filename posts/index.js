const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware for enabling CORS
app.use(cors());

// Custom middleware to log API path
app.use((req, res, next) => {
  console.log(`API Path accessed: ${req.method} ${req.path}`);
  next();
});

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
