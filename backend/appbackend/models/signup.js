var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var signup = new Schema(
    {
        firstName:String ,
        lastName:String ,
        password:String ,
        email:String ,
        // isDeleted: { type: Boolean , default: false } ,
        // islive: { type: Boolean , default: false } 
        
    }
);

module.exports=mongoose.model('Signup' , signup);