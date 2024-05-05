// src\models\index.js

const mongoose = require('mongoose');
const config = require('../core/config');
const logger = require('../core/logger')('app');

//LIKOBUN ADALAH CLUSTER0 DATABASE BARU SAYA DI AKUN YANG LAIN,SAYA [DHANI ANDIKA MAHARSI]
mongoose.connect('mongodb+srv://LikoBun:171807074@cluster0.8fimfp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true // Add this line for newer versions of MongoDB
});

const db = mongoose.connection;
db.once('open', () => {
  logger.info('Successfully connected to MongoDB');
});

module.exports = {
  mongoose,
};
