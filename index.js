const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

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