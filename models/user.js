const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
   },
  name:{
    type:String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  vote:[{
    type: String
  }]
   
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);