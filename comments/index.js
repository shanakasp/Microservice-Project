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

const commentsByPostId = {}; // Corrected variable name

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

// Start the server
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
