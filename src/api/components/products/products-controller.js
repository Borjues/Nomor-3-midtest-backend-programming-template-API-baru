//products-controller.js file

const productsService = require('./products-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

/**
 * Handle get list of products request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middleware
 * @returns {object} Response object or pass an error to the next route
 */
async function getProducts(request, response, next) {
  try {
    const products = await productsService.getProducts();
    return response.status(200).json(products);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle get product detail request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middleware
 * @returns {object} Response object or pass an error to the next route
 */
async function getProduct(request, response, next) {
  try {
    const productId = request.params.id;
    const product = await productsService.getProduct(productId);

    if (!product) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Product not found');
    }

    return response.status(200).json(product);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle create product request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middleware
 * @returns {object} Response object or pass an error to the next route
 */
async function createProduct(request, response, next) {
  try {
    const { name, description, price, quantity } = request.body;

    const product = await productsService.createProduct(name, description, price, quantity);

    return response.status(201).json(product);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle update product request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middleware
 * @returns {object} Response object or pass an error to the next route
 */
async function updateProduct(request, response, next) {
  try {
    const productId = request.params.id;
    const { name, description, price, quantity } = request.body;

    const product = await productsService.updateProduct(productId, name, description, price, quantity);

    if (!product) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Product not found');
    }

    return response.status(200).json(product);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle delete product request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middleware
 * @returns {object} Response object or pass an error to the next route
 */
async function deleteProduct(request, response, next) {
  try {
    const productId = request.params.id;

    const deletedProduct = await productsService.deleteProduct(productId);

    if (!deletedProduct) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Product not found');
    }

    return response.status(204).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
