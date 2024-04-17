var express = require('express');
var router = express.Router();
var passport=require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  let results = [
    { brand: "AcousticBeat", size: "Small", cost: 50.00 },
    { brand: "SonicBlast", size: "Medium", cost: 75.00 },
    { brand: "AudioPhonic", size: "Large", cost: 100.00 }
  ];
  res.render('earphones', { title: 'Search Result Earphones', results: results });
});

module.exports = router;
var express = require('express');
const earphones_controllers= require('../controllers/earphones');
var router = express.Router();
/* GET earphones */
router.get('/', earphones_controllers.earphones_view_all_Page );
router.get('/earphones/:id', earphones_controllers.earphones_detail);
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");}
/* GET detail earphones page */
router.get('/detail',secured, earphones_controllers.earphones_view_one_Page);
// redirect to login.
/* GET create earphones page */
router.get('/create',secured, earphones_controllers.earphones_create_Page);
/* GET delete earphones page */
router.get('/delete', earphones_controllers.earphones_delete_Page);
/* GET update earphones page */
router.get('/update', secured,earphones_controllers.earphones_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
  });
  module.exports = router;