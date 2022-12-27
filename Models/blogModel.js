const mysql = require('mysql')
require('dotenv').config();


const sql = mysql.createConnection({
  host: process.env.CONNECTION_STRING,
  user: 'admin',
  password: process.env.CONNECTION_PASSWORD,
  database: 'Test'
})

module.exports = {sql}//, blogModel, blogSchema}