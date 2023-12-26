require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const app = express();

const MONGO = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use("/api/products", productRoute);

app.use(express.json());
mongoose
  .connect(MONGO)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
    console.log("connected to mongo DB");
  })
  .catch((error) => {
    console.error(error);
  });
