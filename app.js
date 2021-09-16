/* eslint-disable no-undef */

require("dotenv").config({ path: path.resolve(__dirname, './.env') });
require("./config/database").connect();

const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser')
const cors = require('cors');
const expressSession = require('express-session');
const path = require('path');

app.use(express.json());


app.use(bodyParser.json())
app.use('/uploads/fundraisers/', express.static('uploads/fundraisers'))
app.use('/uploads/users/', express.static('uploads/users'))
app.use(cors());
app.use(expressSession({
    secret: 'keyboard cat'
}))



/* ---------------------------------------------------- 
                START: Routers
---------------------------------------------------- */

// Fundraiser
const fundraiserRouter = require('./models/Fundraisers')

// Users
const userRouter = require('./models/Users')

// Admins
const authRoute = require('./middleware/auth')



/* ---------------------------------------------------- 
                START: Request handler
---------------------------------------------------- */

// Fundraiser Post
app.use('/api/fundraiser', fundraiserRouter);

// Admin Request
app.use('/api/auth', authRoute);

// Users Request
app.use('/api/user', userRouter);

// This should be the last route else any after it won't work

// app.use("*", (req, res) => {
//     res.status(404).json({
//       success: "false",
//       message: "Page not found",
//       error: {
//         statusCode: 404,
//         message: "You reached a route that is not defined on this server",
//       },
//     });
//   });

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, 'client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});  
  
module.exports = app;