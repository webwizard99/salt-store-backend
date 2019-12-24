const express = require('express');
const cors = require('cors');
const db = require('./config/database');

// const router = express.Router();

// router.get('/db', async (req, res) => {
//   try {
    
//     await client.connect();

//     const result = await client.query('SELECT * FROM public.test_table');
//     const results = { 'results': (result) ? result.rows : null};
//     res.send(JSON.stringify(results));
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// app.use('/', router);

require('./routes/storeRoutes')(app);


const storeitems = require('./utilities/storeitems');
storeitems.initTestItems(120);

app.get('/hello', (req, res, next) => {
  res.status(200)
    .send('Hi there!');

  next();
});


app.listen(PORT);