const { prompt } = require('inquirer');
const db = require('./db');
require('console.table');

start();

function start() {
  console.table(db.findAllManagers(1))
}