const express = require('express');

const handlebarsRouter = express.Router();

handlebarsRouter.get('/', (req, res) => {
  console.log('in test route...');
  res.render('test/test');
});

module.exports = handlebarsRouter;