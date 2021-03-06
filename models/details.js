var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name:{
        type: String,
		required: true
    },
	email:{
        type: String,
        required: true
    },
    userid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
   
    district:{
        type:String
    },
    taluk:{
        type:String
    },
    contact:{
        type:String
    },
    vote:[{
        type: String
      }],
    photo:{
        data: Buffer, 
        contentType: String 
    }

});

module.exports = mongoose.model('User-details', userSchema);