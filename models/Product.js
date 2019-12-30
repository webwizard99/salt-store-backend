const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING
  },
  cost: {
    type: Sequelize.REAL
  },
  description: {
    type: Sequelize.STRING
  },
  category_id: {
    type: Sequelize.INTEGER
  },
  weight: {
    type: Sequelize.REAL
  },
  height: {
    type: Sequelize.REAL
  },
  width: {
    type: Sequelize.REAL
  },
  depth: {
    type: Sequelize.REAL
  }
});

module.exports = Product;