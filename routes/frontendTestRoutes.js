const express = require('express');
const path = require('path');


const frontendRouter = express.Router();

frontendRouter.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

frontendRouter.get('/', (req, res) => {
  res.status(200).sendFile('./index.html', { root: __dirname}); // path.join(__dirname, '../public', 'index.html'));
});

module.exports = frontendRouter;