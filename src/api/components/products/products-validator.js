// products-validator.js file

const joi = require('joi');

module.exports = {
  getProducts: {
    params: {
    },
  },

  createProduct: {
    body: {
      name: joi.string().required().label('Name'),
      description: joi.string().required().label('Description'),
      price: joi.number().min(0).required().label('Price'),
      quantity: joi.number().min(0).required().label('Quantity'),
    },
  },

  updateProduct: {
    params: {
      id: joi.string().required().label('Product ID'),
    },
    body: {
      name: joi.string().optional().label('Name'),
      description: joi.string().optional().label('Description'),
      price: joi.number().min(0).optional().label('Price'),
      quantity: joi.number().min(0).optional().label('Quantity'),
    },
  },
};

