const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'employees'
})

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;