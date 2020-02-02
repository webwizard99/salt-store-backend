const express = require('express');

const handlebarsRouter = express.Router();

handlebarsRouter.get('/', (req, res) => {
  res.render('test/test');
});

module.exports = handlebarsRouter;