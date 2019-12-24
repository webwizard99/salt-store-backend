const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

const router = express.Router();

router.get('/db', async (req, res) => {
  try {
    
    const dbClient = await client.connect();

    // this is where I'm getting errors
    // right now.
    // It says 'Cannot read property 'query' of undefined'
    // documentation says to use pg module...
    // Not sure what I'm doing wrong.
    const result = await dbClient.query('SELECT * FROM public.test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('/db', results);
    dbClient.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/', router);

require('./routes/storeRoutes')(app);


const storeitems = require('./utilities/storeitems');
storeitems.initTestItems(120);

app.get('/hello', (req, res, next) => {
  res.status(200)
    .send('Hi there!');

  next();
});


app.listen(PORT);