const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
mongoose
  .connect("")
  .then(() => {
    app.listen(3000, () => {
      console.log(`App is running on port 3000`);
    });
    console.log("connected to mongo DB");
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/Home", (req, res) => {
  res.status(200).json({ Message: "Welcome to Home Page" });
});
app.get("/Blog", (req, res) => {
  res.status(200).json({ Message: "Welcome to Blog Page, My name is Dev" });
});
