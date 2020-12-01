const mongoose =require("mongoose");
const productSchema = mongoose.Schema({
    name:String,
    price:String,
});
const product = mongoose.model("product" , productSchema);
module.exports = product;