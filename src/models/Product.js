// models/Product.js

const mongoose = require('mongoose');

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Create and export the Product model based on the schema
module.exports = mongoose.model('Product', productSchema);
