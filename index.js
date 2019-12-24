const express = require('express');
const cors = require('cors');
const db = require('./config/database');

const testRoute = require('./routes/testRoute');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

app.use('/db', testRoute);

require('./routes/storeRoutes')(app);


const storeitems = require('./utilities/storeitems');
storeitems.initTestItems(120);

app.get('/hello', (req, res, next) => {
  res.status(200)
    .send('Hi there!');

  next();
});


app.listen(PORT);