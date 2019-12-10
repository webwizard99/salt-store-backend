const express = require('express');
const cors = require('cors');

const allowedOrigins = require('./origins/origins');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.all('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
})

require('./routes/storeRoutes')(app);



// ({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// })

// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');

//   next();
// }

// app.use(allowCrossDomain);

const storeitems = require('./utilities/storeitems');
storeitems.initTestItems(120);

app.get('/hello', (req, res, next) => {
  res.status(200)
    .append('Access-Control-Allow-Origin', '*')
    .send('Hi there!');

  next();
});


app.listen(PORT);