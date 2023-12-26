const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
//create a product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get all product
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get a product
const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//update a products
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //If we cannot find any product in database
    if (!product) {
      res.status(404);
      throw new Error(`Cannot find any product with ID ${id}`);
    }
    const updated = await Product.findById(id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    //If we cannot find any product in database
    if (!product) {
      res.status(404);
      throw new Error(`Cannot find any product with ID ${id}`);
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
