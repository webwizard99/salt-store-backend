const express = require('express');
const db = require('../config/database');
const Product = require('../models/Product');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const storeItems = require('../utilities/storeitems');

// declare router for products
const productRouter = express.Router();

// get product list
productRouter.get('/', (req, res) => {
  Product.findAll()
    .then(products => res.status(200).send(products))
    .catch(err => console.log(err));
});

productRouter.param('productId', (req, res, next, id) => {
  req.id = id;
})

// get product
productRouter.get('/:productId', (req, res) => {
  const id = req.id;
  Product.findAll({ where: { id: id }})
    .then(product => res.status(200).send(product))
    .catch(err => console.log(err));
})

module.exports = productRouter;