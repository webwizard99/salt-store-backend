const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const bodyParser= require('body-parser');

// import route to get test database
const testRoute = require('./routes/testRoute');

// import products router
const productRoutes = require('./routes/productRoutes');
// import frontend router
const frontendRoutes = require('./routes/frontendTestRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser({ extended: true }));

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

app.use('/db', testRoute);

// mount products router
app.use('/products', productRoutes);

app.use('/frontend', frontendRoutes);

app.get('/hello', (req, res, next) => {
  res.status(200)
    .send('Hi there!');

  next();
});


app.listen(PORT);