const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: String,
      required: [true],
      default: 0,
    },
    price: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
      required: [false],
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;
