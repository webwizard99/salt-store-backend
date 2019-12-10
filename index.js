const express = require('express');
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

require('./routes/storeRoutes')(app);


const storeitems = require('./utilities/storeitems');
storeitems.initTestItems(120);

app.get('/hello', (req, res, next) => {
  res.status(200)
    .send('Hi there!');

  next();
});


app.listen(PORT);