const express = require('express');
const db = require('../config/database');
const Product = require('../models/Product');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// declare router for products
const productRouter = express.Router();

// get product list
productRouter.get('/', (req, res) => {
  Product.findAll()
    .then(products => res.status(200).send(products))
    .catch(err => console.log(err));
});

module.exports = productRouter;