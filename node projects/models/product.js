const mongoose =require("mongoose");
const productSchema = mongoose.Schema({
    name:String,
    price:String,
});
const product = mongoose.model("Product" , productSchema);
module.exports = product;