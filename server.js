// DEVELOPMENT ONLY

const dotenv = require('dotenv');

dotenv.load();

// INITIALIZE APP

const express = require('express');

const app = express();

// SET HEADERS

const { setHeaders } = require('./services/headers');

setHeaders(app);

// SESSION HANDLING

// CSRF PROTECTION

/* const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(csrf({
  cookie: true
})); */

// CRUD API

const Atlan = require('atlan');

const atlan = new Atlan();
app.use('/api', atlan.router());

// CONNECT TO DB

const { initializeDatabase } = require('./services/database');

initializeDatabase(atlan, app);

// START SERVER

app.use(express.static('images'));

app.listen(process.env.PORT);
