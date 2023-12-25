const express = require("express");
const app = express();

app.get("/Home", (req, res) => {
  res.status(200).json({ Message: "Welcome to Home Page" });
});

app.listen(3000, () => {
  console.log(`App is running on port 3000`);
});
