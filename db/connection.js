const mysql = require("mysql2");

// Connect website to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "election",
  },
  console.log("Connected to the election database.")
);

module.exports = db;
