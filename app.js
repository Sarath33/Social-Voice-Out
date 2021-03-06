const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const imgModel = require("./models/image");
const User = require("./models/user");
const post_model = require("./models/post_model");
const admin_model = require("./models/admin");
const comment = require("./models/comments");
const user = require("./routes/user_route");

// const user1 = require("./routes/user1_route");
const InitiateMongoServer = require("./config/db");
const alert = require("alert");
const querystring = require("querystring");
const url = require("url");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var multer = require("multer");
var passport = require('passport');
var flash = require('connect-flash');
var nodemailer = require('nodemailer');
var details = require('./models/details');
const file_upload = require("express-fileupload");
const { post } = require("./routes/user_route");
const fileUpload = require('express-fileupload')
const mongodb = require('mongodb');
const comments = require("./models/comments");




const mongoClient = mongodb.MongoClient
const binary = mongodb.Binary


//const trt = mongoClient.connect('mongodb+srv://yelp:Tech@1234@yelp.kmvtt.mongodb.net/test', { useNewUrlParser: true }.db('test').collection('videos'));
  


// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;


// Middleware
require('./config/passport')(passport);
app.use("/static", express.static('./static/'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({secret: 'anystringoftext', saveUninitialized: true,resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
app.use(fileUpload())


/*
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });
app.post('/uploader', (req, res) => {
  if (req.file) {
    res.json(req.file);
  }
  else throw 'error';
});
*/
app.set("view engine", "ejs");

  require('./login_signup_routes.js')(app, passport);


  app.use("/user", user);
  require("./home_desc.js")(app);
  require("./profile.js")(app);
  require("./admin.js")(app);


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
