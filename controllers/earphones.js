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
    // {"earphones_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
exports.earphones_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await earphones.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };


    exports.earphones_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await earphones.findById( req.params.id)
    // Do updates of properties
    if(req.body.brand)
    toUpdate.brand = req.body.brand;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    
    exports.earphones_delete = async function(req, res) {
        console.log("delete " + req.params.id)
        try {
        result = await earphones.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
        };
        // Handle a show one view with id specified by query
exports.earphones_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await earphones.findById( req.query.id)
    res.render('earphonesdetail',
    { title: 'earphones Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a earphones.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.earphones_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earphonescreate', { title: 'earphones Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a earphones.
// query provides the id
exports.earphones_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await earphones.findById(req.query.id)
res.render('earphonesupdate', { title: 'earphones Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.earphones_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await earphones.findById(req.query.id)
    res.render('earphonesdelete', { title: 'earphones Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
