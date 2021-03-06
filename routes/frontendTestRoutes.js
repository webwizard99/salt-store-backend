const express = require('express');
const path = require('path');
const reactChunks = require('../config/reactchunks');

// const csrfProtection = csrf();

const frontendRouter = express.Router();

// frontendRouter.use(csrfProtection);

frontendRouter.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

frontendRouter.get('/*', (req, res) => {

  // res.status(200).sendFile(path.join(__dirname, '../', '/public/build','index.html'));
  const chunk1 = reactChunks.path + reactChunks.chunk1;
  const chunk2 = reactChunks.path + reactChunks.chunk2;
  const css = reactChunks.cssPath + reactChunks.css;
  
  res.render('index', 
  { script1: chunk1,
    script2: chunk2,
    css: css
  });

});

module.exports = frontendRouter;