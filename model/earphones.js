const mongoose = require("mongoose")
const earphonesSchema = new mongoose.Schema({
brand: String,
size: {
    type:String,
    minlength:2,
    maxlength:100
},
cost: {
    type:Number,
    min:0,
    max:1000
}
});
module.exports = mongoose.model("earphones",earphonesSchema);
 