const mongoose = require("mongoose")
const earphonesSchema = new mongoose.Schema({
brand: String,
size: String,
price: Number
})
module.exports = mongoose.model("earphones",
earphonesSchema)
 