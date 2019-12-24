const Sequelize = require('sequelize');
const db = require('../config/database');

const TestTable = db.define('test_table', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = TestTable;