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
// VIEWS
// Handle a show all view
exports.earphones_view_all_Page = async function(req, res) {
    try{
    theearphones = await earphones.find();
    res.render('earphones', { title: 'earphones Search Results', results: theearphones });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
    exports.earphones_create_post = async function(req, res) {
    console.log(req.body)
    let document = new earphones();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.price = req.body.price;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
