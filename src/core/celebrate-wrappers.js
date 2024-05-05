// src\core\celebrate-wrappers.js

//ini sumber error gajelas
const { celebrate } = require('celebrate');

module.exports = (schema) => celebrate(schema, { abortEarly: false });
