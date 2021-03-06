var mongoose = require('mongoose');

var admin = new mongoose.Schema({
	special_id:{
        type:String
    },
    password:{
        type:String
    },
    district:{
        type:String
    },
    department:{
        type:String
    }
	
	});

 
module.exports = mongoose.model("admin",admin);