var express = require('express');
var router = express.Router();

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
const earphones_controlers= require('../controllers/earphones');
var router = express.Router();
/* GET costumes */
router.get('/', earphones_controlers.earphones_view_all_Page );
module.exports = router;