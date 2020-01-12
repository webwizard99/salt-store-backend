const express = require('express');
const path = require('path');


const frontendRouter = express.Router();

frontendRouter.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = frontendRouter;