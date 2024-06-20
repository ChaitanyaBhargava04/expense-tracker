var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var product = new Schema(
    {
        title: String,
        category: String,
        amount: Number,
        date: Date,
        // isDeleted: { type: Boolean , default: false } ,
        // islive: { type: Boolean , default: false }     
    }
);
module.exports=mongoose.model('Product' , product);