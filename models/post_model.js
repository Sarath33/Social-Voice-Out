const { Binary, BSONType } = require('mongodb');
var mongoose = require('mongoose'); 
  
var imageSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true,
        
    },
    file: { 
       
       
        
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    comments:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}
    ],
    post:{
        type: String
    },
    count:{
        type: Number,
        default: 0
    },
    region:{
        type: String
    },
    verify:{
        type:String
    },
    date:{
        type: Date,
		default: Date.now()
    },
    district:{
        type:String
    },
    problem:{
        type:String
    }
    
}); 
  
//Image is a model which has a schema imageSchema 
  
module.exports = new mongoose.model('videos', imageSchema);