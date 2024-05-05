//products-service.js:

const productsRepository = require('./products-repository');
const { errorResponder, errorTypes } = require('../../../core/errors');

/**
 * Get list of products
 * @returns {Array}
 */
async function getProducts() {
  return await productsRepository.getProducts();
}

/**
 * Get product detail
 * @param {string} id - Product ID
 * @returns {Object}
 */
async function getProduct(id) {
  return await productsRepository.getProduct(id);
}

/**
 * Create new product
 * @param {string} name - Name
 * @param {string} description - Description
 * @param {number} price - Price
 * @param {number} quantity - Quantity
 * @returns {Object}
 */
async function createProduct(name, description, price, quantity) {
  const ProductThatExisted = await productsRepository.getProductByName(name);
  if (ProductThatExisted) {
    throw errorResponder(errorTypes.BAD_REQUEST, 'Product with the same name already exists');
  }

  return await productsRepository.createProduct(name, description, price, quantity);
}

/**
 * Update existing product
 * @param {string} id - Product ID
 * @param {string} name - Name
 * @param {string} description - Description
 * @param {number} price - Price
 * @param {number} quantity - Quantity
 * @returns {Object}
 */
async function updateProduct(id, name, description, price, quantity) {
  const ProductThatExisted = await productsRepository.getProduct(id);
  if (!ProductThatExisted) {
    throw errorResponder(errorTypes.NOT_FOUND, 'Product not found');
  }

  return await productsRepository.updateProduct(id, name, description, price, quantity);
}

/**
 * Delete a product
 * @param {string} id - Product ID
 * @returns {boolean}
 */
async function deleteProduct(id) {
  const ProductThatExisted = await productsRepository.getProduct(id);
  if (!ProductThatExisted) {
    throw errorResponder(errorTypes.NOT_FOUND, 'Product not found');
  }

  return await productsRepository.deleteProduct(id);
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
