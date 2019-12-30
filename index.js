const express = require('express');
const cors = require('cors');
const db = require('./config/database');

// import route to get test database
const testRoute = require('./routes/testRoute');

// import products router
const productRoutes = require('./routes/productRoutes');

// default test data creation module
const storeitems = require('./utilities/storeitems');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

app.use('/db', testRoute);

// mount products router
app.use('/products', productRoutes);

// Routes for getting store items
require('./routes/storeRoutes')(app);



storeitems.initTestItems(120);

app.get('/hello', (req, res, next) => {
  res.status(200)
    .send('Hi there!');

  next();
});


app.listen(PORT);