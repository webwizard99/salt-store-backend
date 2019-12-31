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
  
  // if request lacks API key for adding products, refuse request
  if (key != process.env.products_key) {
    res.status(404).send();
  }

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  if (cost && typeof cost !== 'number') {
    cost = Number.parseFloat(cost).toFixed(2);
  }
  if (description && typeof description !== 'string') {
    description = description.toString();
  }
  if (img_url && typeof img_url !== 'string') {
    img_url = img_url.toString();
  }
  if (alt_text && typeof alt_text !== 'string') {
    alt_text = alt_text.toString();
  }
  if (category_id && typeof category_id !== 'number') {
    category_id = Number.parseInt(category_id);
  }
  if (weight && typeof weight !== 'number') {
    weight = Number.parseFloat(weight);
  }
  if (height && typeof height !== 'number') {
    height = Number.parseFloat(height);
  }
  if (width && typeof width !== 'number') {
    width = Number.parseFloat(width);
  }
  if (depth && typeof depth !== 'number') {
    depth = Number.parseFloat(depth);
  }

  // reject request if missing a field
  if (!name || !cost || !description || !img_url || ! alt_text ||
      !category_id || !weight || !height || !width || !depth) {
    res.status(400).send();
  } else {

    // create Product in postgreSQL db from request data
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

// put product
productRouter.put('/:productId', (req, res) => {
  
  // pull id from req object
  let id = req.id;
  
  // pull fields from req body
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
  
  // if request lacks API key for adding products, refuse request
  if (key != process.env.products_key) {
    res.status(404).send();
  }

  // validate input types
  if (id && typeof id != 'number') {
    id = Number.parseInt(id);
  }
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  if (cost && typeof cost !== 'number') {
    cost = Number.parseFloat(cost).toFixed(2);
  }
  if (description && typeof description !== 'string') {
    description = description.toString();
  }
  if (img_url && typeof img_url !== 'string') {
    img_url = img_url.toString();
  }
  if (alt_text && typeof alt_text !== 'string') {
    alt_text = alt_text.toString();
  }
  if (category_id && typeof category_id !== 'number') {
    category_id = Number.parseInt(category_id);
  }
  if (weight && typeof weight !== 'number') {
    weight = Number.parseFloat(weight);
  }
  if (height && typeof height !== 'number') {
    height = Number.parseFloat(height);
  }
  if (width && typeof width !== 'number') {
    width = Number.parseFloat(width);
  }
  if (depth && typeof depth !== 'number') {
    depth = Number.parseFloat(depth);
  }

  // reject request if missing a field
  if (!name || !cost || !description || !img_url || ! alt_text ||
      !category_id || !weight || !height || !width || !depth) {
    res.status(400).send();
  } else {

    // create Product in postgreSQL db from request data
    Product.update({
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
    }, { where: {
      id: id
    }})
    .then(product => res.status(200).send(product))
    .catch(err => console.log(err));
  }
});

productRouter.delete('/:productId', (req, res) => {
  // pull id from req
  let id = req.id;

  // validate input types
  if (id && typeof id != 'number') {
    id = Number.parseInt(id);
  }

  if (!id) {
    res.status(400).send();
  } else {
    Product.destroy({ where: { id: id } })
      .then(response => res.status(200).send())
      .catch(err => console.log(err));
  }
})

module.exports = productRouter;