var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )
  
require('dotenv').config();
const connectionString = process.env.MONGO_CON;
mongoose=require('mongoose');
mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var earphonesRouter = require('./routes/earphones');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick')
var app = express();
var earphonesModel=require("./model/earphones");
var resourceRouter=require('./routes/resource');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/earphones', earphonesRouter);
app.use('/grid', gridRouter);
app.use('/pick',pickRouter);
app.use('/earphones',earphonesModel);
app.use('/resource',resourceRouter);

//passport config
// Use the existing connection
// The Account model
var Account =require('./model/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await earphonesModel.deleteMany();
  let instance1 = new
  earphonesModel({brand:"AcousticBeat", size:"Large",
  cost:521});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  let instance2 = new
  earphonesModel({brand:"SonicBlast", size:"Small",
  cost:500});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  let instance3 = new
  earphonesModel({brand:"AudioPhonic", size:"medium",
  cost:590});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
 }
 let reseed = true;
 if (reseed) {recreateDB();}