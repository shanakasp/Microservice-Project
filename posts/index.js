const express = require("express");
const { randomBytes } = require("crypto");
const app = express();

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts); // Sending a response for GET request
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(200).send(posts[id]);
});

// Start the server
const PORT = 3000; // Choose any port you prefer
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
