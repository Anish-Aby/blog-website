"use strict";

// import statements
import express from "express";

// initialising express app
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

// landing page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// server listening
app.listen(PORT, () => {
  console.log(`Server up and running. Listening on port ${PORT}`);
});
