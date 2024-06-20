var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var feedback = new Schema(
    {
        name:String ,
        email:String ,
        subject:String ,
        message:String ,
        // isDeleted: { type: Boolean , default: false } ,
        // islive: { type: Boolean , default: false } 
        
    }
);

module.exports=mongoose.model('Feedback' , feedback);