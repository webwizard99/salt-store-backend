const express = require('express');

const frontendRouter = express.Router();

frontendRouter.get('/', (req, res) => {
  res.status(200).sendFile('index.html');
});

module.exports = frontendRouter;