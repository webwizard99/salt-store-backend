const express = require('express');

const app = express();
require('./routes/storeRoutes')(app);

const storeitems = require('./utilities/storeitems');
storeitems.initTestItems(120);

app.get('/hello', (req, res, next) => {
  res.status(200);
  res.send('Hi there!');
})


const PORT = process.env.PORT || 5000;

app.listen(PORT);