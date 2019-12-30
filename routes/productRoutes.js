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

productRouter.get('/loadTestProducts', (req, res) => {
  const allItems = storeItems.getItems(1, 40);
  
  allItems.forEach(item => {
    Product.create({
      name: item.name,
      cost: item.price,
      description: item.description,
      img_url: item.img,
      alt_text: item.alt,
      category_id: item.categoryId,
      weight: item.weight,
      height: item.height,
      width: item.width,
      depth: item.depth
    })
      .catch(err => console.log(err));
  });

  res.status(200).redirect('/');
});

module.exports = productRouter;