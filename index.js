const express = require('express');
const expressHbs = require('express-handlebars');
const cors = require('cors');
const db = require('./config/database');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const session = require('express-session');
const Passport = require('passport');
const path = require('path');

// import route to get test database (delete)
const testRoute = require('./routes/testRoute');
// import products router
const productRoutes = require('./routes/productRoutes');
// import frontend router
const frontendRoutes = require('./routes/frontendTestRoutes');
const userRoutes = require('./routes/userRoutes');

// initialize express app
const app = express();
// require in passport strategies
require('./config/passport');

const PORT = process.env.PORT || 5000;


const csurfMiddleware = csrf({ cookie: true });

app.use(cors());
app.use(bodyParser({ extended: true }));

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// view engine setup
app.engine('.hbs', expressHbs({ defaultLayout: null, extname: '.hbs', layoutsDir: __dirname + 'views/layouts' }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(csurfMiddleware)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'sheM0zz3l3pf3', resave: false, saveUninitialized: false }));
app.use(Passport.initialize());
app.use(Passport.session());


app.use('/db', testRoute);

// mount products router
app.use('/products', productRoutes);

app.use('/frontend', frontendRoutes);
app.use('/user', userRoutes);


app.listen(PORT);