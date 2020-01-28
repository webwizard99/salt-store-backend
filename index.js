const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const Passport = require('passport');
const path = require('path');

// import route to get test database (delete)
const testRoute = require('./routes/testRoute');
// import products router
const productRoutes = require('./routes/productRoutes');
// import frontend router
const frontendRoutes = require('./routes/frontendTestRoutes');

// initialize express app
const app = express();
// require in passport strategies
require('./config/passport');

const PORT = process.env.PORT || 5000;

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// view engine setup
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

// set up middlewares
app.use(cors());
app.use(bodyParser({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'sheM0zz3l3pf3', resave: false, saveUninitialized: false }));
app.use(Passport.initialize());
app.use(Passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/db', testRoute);

// mount products router
app.use('/products', productRoutes);

app.use('/', frontendRoutes);


app.listen(PORT);