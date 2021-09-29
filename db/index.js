const connection = require('./connection');

class DB{
  constructor(connection) {
    this.connection = connection;
  }

  findAllManagers(employeeId) {
    return this.connection.promise().query(
      'SELECT id, first_name, last_name FROM employee WHERE id != ?',
      employeeId
    );
  }
}

module.exports = new DB(connection)