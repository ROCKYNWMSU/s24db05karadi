var earphones = require('../model/earphones');

exports.earphones_list = function(req, res) {
res.send('NOT IMPLEMENTED: earphones list');
};

exports.earphones_detail = function(req, res) {
res.send('NOT IMPLEMENTED: earphones detail: ' + req.params.id);
};

exports.earphones_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: earphones create POST');
};

exports.earphones_delete = function(req, res) {
res.send('NOT IMPLEMENTED: earphones delete DELETE ' + req.params.id);
};

exports.earphones_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: earphones update PUT' + req.params.id);
};

exports.earphones_list = async function(req, res) {
try{
theearphones = await earphones.find();
res.send(theearphones);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
