
const express = require("express");


const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./auth");
const imgModel = require("../models/image");
const post_model = require("../models/post_model");
const comment = require("../models/comments");
const router = express.Router();
const alert = require("alert");

const querystring = require("querystring");
var User = require("../models/user");
const details = require("../models/details");

//var MongoClient = require('mongodb').MongoClient;

const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient
const binary = mongodb.Binary



router.get("/mypost/:id", (req,res)=>{
var _id = req.params.id;
 details.findById(_id, (err,it) =>{

  

  var username = it.userid;

  post_model.find({username}, (err,item) =>{
    
    if(item.length == 0)
    {
     imgs = null; 
    }
    else{
      imgs = item;
    }
    
    res.render("mypost",{obj:imgs,user:it, id: _id});
  })
  
    
  })
    
}
);


router.get("/mypost_video/:id",(req,res) =>{

  var _id = req.params.id;
  details.findById(_id, (err,it) =>{
 
   
 
   var username = it.userid;

   mongoClient.connect('mongodb+srv://yelp:Tech@1234@yelp.kmvtt.mongodb.net/test', { useNewUrlParser: true }, (err, client) => {
      if (err) {
          return err
      }
      let db = client.db('test')
          let collection = db.collection('videos');

        collection.find().toArray((err,item)=>{
          if(err)
          {
            console.log(err);
          }
          
          res.render("video_post",{obj: item,user:it,id:_id});
        })

    })



  });
})



router.post("/upload/:id", (req, res) => {
  
  var query = querystring.parse(req.params.id);

  var user = query.user;
  var post = query.post;
  details.findById(user, (err,it) =>{
  
  let file = { username: user, title: req.body.title, description: req.body.description, file: binary(req.files.video.data), region: req.body.region,problem:req.body.problem,district: it.district,
    post,
    count: 0,verify:"not yet"
    
  };
  //console.log(file);
  
  insertFile(file, res,req)

});
  
})

function insertFile(file, res,req) {
  var query = querystring.parse(req.params.id);
 
  var user = query.user;
      post_model.create(file,(err,item)=>{
        if(err)
        {
          console.log(err);
        }
        
      });
     
          res.redirect('/get/scope=global&user='+user);
      

  
}

  

module.exports = router;