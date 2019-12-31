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
  next();
})

// get product
productRouter.get('/:productId', (req, res) => {
  let id = req.id;

  if (typeof id !== 'number') {
    id = Number.parseInt(id);
  }
  Product.findAll({ where: { id: id }})
    .then(product => res.status(200).send(product))
    .catch(err => console.log(err));
});

productRouter.post('/', (req, res) => {
  let { key, 
    name, 
    cost, 
    description, 
    img_url, 
    alt_text, 
    category_id, 
    weight, 
    height, 
    width, 
    depth } = req.body;
  
  if (key != process.env.products_key) {
    res.status(404).send();
  }

  // validate input types
  if (typeof name !== 'string') {
    name = name.toString();
  }
  if (typeof cost !== 'number') {
    cost = Number.parseFloat(cost).toFixed(2);
  }
  if (typeof description !== 'string') {
    description = description.toString();
  }
  if (typeof img_url !== 'string') {
    img_url = img_url.toString();
  }
  if (typeof alt_text !== 'string') {
    alt_text = alt_text.toString();
  }
  if (typeof category_id !== 'number') {
    category_id = Number.parseInt(category_id);
  }
  if (typeof weight !== 'number') {
    weight = Number.parseFloat(weight);
  }
  if (typeof height !== 'number') {
    height = Number.parseFloat(height);
  }
  if (typeof width !== 'number') {
    width = Number.parseFloat(width);
  }
  if (typeof depth !== 'number') {
    depth = Number.parseFloat(depth);
  }

  if (!name || !cost || !description || !img_url || ! alt_text ||
      !category_id || !weight || !height || !width || !depth) {
    res.status(400).send();
  } else {
    Product.create({
      name,
      cost,
      description,
      img_url,
      alt_text,
      category_id,
      weight,
      height,
      width,
      depth
    })
    .then(product => res.status(200).send(product))
    .catch(err => console.log(err));
  }
});

module.exports = productRouter;