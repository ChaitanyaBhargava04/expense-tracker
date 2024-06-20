var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var admin = new Schema(
    {
        firstName:String ,
        lastName:String ,
        password:String ,
        email:String ,
        // isDeleted: { type: Boolean , default: false } ,
        // islive: { type: Boolean , default: false } 
        
    }
);

module.exports=mongoose.model('Admin' , admin);