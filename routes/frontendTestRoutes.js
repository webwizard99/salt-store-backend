const express = require('express');
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
// const csrfProtection = csrf();

const frontendRouter = express.Router();

// frontendRouter.use(csrfProtection);

=======

const frontendRouter = express.Router();

>>>>>>> parent of 0f44b9c... Add handlebars and move react chunk file references to an object in the config folder.
=======

const frontendRouter = express.Router();

>>>>>>> parent of 0f44b9c... Add handlebars and move react chunk file references to an object in the config folder.
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
<<<<<<< HEAD
<<<<<<< HEAD
  // res.status(200).sendFile(path.join(__dirname, '../public', '/build','index.html'));
  const chunk1 = reactScripts.path + reactScripts.chunk1;
  const chunk2 = reactScripts.path + reactScripts.chunk2;
  const css = reactScripts.cssPath + reactScripts.css;
  
  // res.status(200).send('front end');
  res.render('/', {});
  // res.render('/', 
  // { script1: chunk1,
  //   script2: chunk2, 
  //   unpackingScript: reactScripts.unpackingScript,
  //   css: css,
  //   csrfToken: req.csrfToken() 
  // });
=======
  res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
>>>>>>> parent of 0f44b9c... Add handlebars and move react chunk file references to an object in the config folder.
=======
  res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
>>>>>>> parent of 0f44b9c... Add handlebars and move react chunk file references to an object in the config folder.
});

module.exports = frontendRouter;