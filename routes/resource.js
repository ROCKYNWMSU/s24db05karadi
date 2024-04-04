var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var earphones_controller = require('../controllers/earphones');

router.get('/', api_controller.api);

router.post('/earphones', earphones_controller.earphones_create_post);

router.delete('/earphones/:id', earphones_controller.earphones_delete);

router.put('/earphones/:id', earphones_controller.earphones_update_put);

router.get('/earphones/:id', earphones_controller.earphones_detail);

router.get('/earphones', earphones_controller.earphones_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"earphones", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
