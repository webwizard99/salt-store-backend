const express = require('express');
const cors = require('cors');

const allowedOrigins = require('./origins/origins');

const app = express();
require('./routes/storeRoutes')(app);

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

const storeitems = require('./utilities/storeitems');
storeitems.initTestItems(120);

app.get('/hello', (req, res, next) => {
  res.status(200);
  res.send('Hi there!');
})


const PORT = process.env.PORT || 5000;

app.listen(PORT);