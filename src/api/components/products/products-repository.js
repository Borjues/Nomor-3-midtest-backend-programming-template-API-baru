// src\api\components\products\products-repository.js

const Product = require('../../../models/products-schema');

/**
 * Get a list of products
 * @returns {Promise}
 */
async function getProducts() {
  return Product.find({});
}

/**
 * Get product detail by ID
 * @param {string} id - Product ID
 * @returns {Promise}
 */
async function getProduct(id) {
  return Product.findById(id);
}

/**
 * Get product detail by name
 * @param {string} name - Product name
 * @returns {Promise}
 */
async function getProductByName(name) {
  return Product.findOne({ name });
}

/**
 * Create new product
 * @param {string} name - Name
 * @param {string} description - Description
 * @param {number} price - Price
 * @param {number} quantity - Quantity
 * @returns {Promise}
 */
async function createProduct(name, description, price, quantity) {
  return Product.create({
    name,
    description,
    price,
    quantity,
  });
}

/**
 * Update existing product
 * @param {string} id - Product ID
 * @param {string} name - Name
 * @param {string} description - Description
 * @param {number} price - Price
 * @param {number} quantity - Quantity
 * @returns {Promise}
 */
async function updateProduct(id, name, description, price, quantity) {
  return Product.updateOne(
    { _id: id },
    {
      $set: {
        name,
        description,
        price,
        quantity,
      },
    }
  );
}

/**
 * Delete a product
 * @param {string} id - Product ID
 * @param {string} name - Name
 * @returns {Promise}
 */
async function deleteProduct(id) {
  return Product.deleteOne({ _id: id });
}

/**
 * Get a list of products
 * @returns {Promise}
 */
async function getProducts() {
  return Product.find({}).select('-__v');
}

module.exports = {
  getProducts,
  getProduct,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
