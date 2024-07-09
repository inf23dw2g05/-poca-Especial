'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'API',
  password: process.env.DB_PASSWORD || 'API',
  database: process.env.DB_NAME || 'api_ecommerce',
  port: process.env.DB_PORT || 3306
});

connection.connect(function (err) {
  if (err) {
    console.log('Error on database connection.');
    throw err;
  }
  console.log('Database connection active.');
});

module.exports = connection;