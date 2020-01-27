const express = require('express');
const path = require('path');
const csrf = require('csurf');
const reactScripts = require('../config/reactchunks');

const csrfProtection = csrf();

const frontendRouter = express.Router();

frontendRouter.use(csrfProtection);

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
  // res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
  const chunk1 = reactScripts.path + reactScripts.chunk1;
  const chunk2 = reactScripts.path + reactScripts.chunk2;
  const css = reactScripts.cssPath + reactScripts.css;
  
  res.render('/', 
  { script1: chunk1,
    script2: chunk2, 
    unpackingScript: reactScripts.unpackingScript,
    css: css,
    csrfToken: req.csrfToken() 
  });
});

module.exports = frontendRouter;