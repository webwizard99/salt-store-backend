const express = require('express');

const app = express();

const storeitems = require('./utilities/storeitems');
storeitems.initTestItems(120);

require('./routes/storeRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);