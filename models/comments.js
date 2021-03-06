var mongoose = require('mongoose');

var commentschema = new mongoose.Schema({
	text: String,
	author:{
		image: String,
		username: String,
		img: 
		{ 
			data: Buffer, 
			contentType: String 
		} 
	},
	createdAt: {
		type: Date,
		default: Date.now()
	  },
	  comments:[
		this
		
	]

	});

 
module.exports = mongoose.model("Comment",commentschema);