const express = require("express");
const Product = require("../models/productModel");
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();
router.use(express.json());
//Write data to DB
router.post("/", createProduct);

//Get data from DB
router.get("/", getProducts);

//Get a single data from DB
router.get("/:id", getProduct);

//Update or Edit Data in DB
router.put("/:id", updateProduct);

//Remove or Delete data from DB
router.delete("/:id", deleteProduct);

module.exports = router;
