// src\api\index.js:

//rute produk (c)
const express = require('express');
const authentication = require('./components/authentication/authentication-route');
const products = require('./components/products/products-route');

module.exports = () => {
  const app = express.Router();

  authentication(app);
  products(app); 

  return app;
};
