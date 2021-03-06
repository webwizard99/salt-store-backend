const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowedNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowedNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowedNull: false
  }
});

module.exports = User;