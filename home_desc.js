var User = require('./models/user');
var details = require('./models/details');
var LocalStrategy = require('passport-local').Strategy;
const imgModel = require("./models/image");

const post_model = require("./models/post_model");
const admin_model = require("./models/admin");
const comment = require("./models/comments");
const user = require("./routes/user_route");

var flash = require('connect-flash');
var nodemailer = require('nodemailer');

const querystring = require("querystring");

module.exports = function(app){

app.get("/desc/:id", async function(req, res)  {

    try{
      var query = querystring.parse(req.params.id);
      var user = query.user;
    var status = "Vote up"
      console.log(user);
    
      post_model.findById(query.img).populate("comments").exec(function (err, campy) {

        details.findById((user),(err,it)=>{
          for(var i=0;i<it.vote.length;i++){
          if(it.vote[i] == query.img)
            status = "Save"

          }
        res.render("desc", { obj: campy, user: it, cmt: campy,admin:null,status});
        });
      })
    }
    catch(err)
    {
      console.log(err);
    }
    })
    
    
    
    
    
   
    
    
    
    app.post("/update_profile/:id", (req, res) => {
    
    
      User.findByIdAndUpdate(req.params.id, { name: req.body.name, email: req.body.email, region: req.body.region }, (err, item) => {
    
        console.log(item);
      })
      res.redirect("/user/home/" + req.params.id + "");
    })
    
    
    app.get("/post/:id/comment", (req, res) => {
      console.log(req.params.id);
      res.render("add_comment", { user: req.params.id });
    })
    
    
    app.post("/post/:id/comment/new", (req, res) => {
    
      var text = req.body.comment;
      var query = querystring.parse(req.params.id);
      var image = query.image;
      var user = query.user;
      var obj;
     
    details.findById(user,(err,item)=>{
      var username = item.userid;
      post_model.findById(image,(err,it)=>{
      //  console.log(it);
    
        var img =it.img;
       
       obj = {
        text: text,
        author: {
          image: image,
          username: item.first_name,
          img
        }
      }
    console.log(item);
    
      post_model.findById(image, (err, item3) => {
    
        comment.create(obj, (err, item2) => {
          if(err){
            console.log(err);
          }
         
          item3.comments.push(item2);
          item3.save();
        })
      }
      )
     
    })
    })
    
    post_model.findById(image).populate("comments").exec( function (err, item2)  {
    
      if (err) {
        console.log(err);
      }
     
      item2.save();
     
    });
    
    
    // res.redirect("/middle/image="+image+"&user="+user);
        
    });


    
    app.get("/middle/:id", (req,res) =>{
      var query = querystring.parse(req.params.id);
      var image = query.image;
      var username = query.user;
    
      var comments ;
      post_model.findById(image).populate("comments").exec( function (err, item2)  {
    
        if (err) {
          console.log(err);
        }
       item2.save();
       details.findById((username),(err,it)=>{
      
        res.render("desc", { obj: item2, user: it });

       });
       
      });
    
    }
    );
    app.get("/check/:id", async (req, res) => {
    
      try{
    
     console.log(req.params.id);
      var query = querystring.parse(req.params.id);
      var image = query.img;
      var username = query.user;
    var status = query.status;

      console.log(status);
    
     post_model.findById( image,(err,item)=>{
       var count = item.count;
     if(status == "Vote up"){
       details.findById(username,(err,ito)=>{
          ito.vote.push(item._id);
          ito.save();
          
       });
       count++;
       item.count = count;
       
       item.save();
   
      }else{

        details.findByIdAndUpdate(username,{ $pull: { "vote": item._id}},{ safe: true, upsert: true },
        function(err, it) {
            if (err) { return handleError(res, err); }
           console.log("deletedd");
        });
         
         
      

        
      }
    
     })
    
     post_model.findById(query.img).populate("comments").exec(function (err, campy) {

      details.findById((username),(err,it)=>{
       
    
      res.render("desc", { obj: campy, user: it, cmt: campy,admin:null,status });

      });
    })
    
    }
    catch{
      console.log(err);
    }
  
    })
    
    
    app.get('/get/:id',(req, res)=>{
      var query = querystring.parse(req.params.id);
     
      var scope = query.scope;
      var username = query.user;
     
     
    
          post_model.find().sort({date: '-1'}).exec(function(err,item){
       
        details.findById(username, (err, it)=>{
         
         
        res.render('post',{obj:item,user:it,admin:null});
        
        });
      
      })
      
    })
    
    app.post("/add_comment/:id",async function(req,res){
    
        
    
        var query = querystring.parse(req.params.id);
        var image = query.image;
        var username = query.user;
        var com = query.comment;
    
        
        
        post_model.findById(image).populate("comments").exec( function (err, item2)  {
      
          if (err) {
            console.log(err);
          }
         
      var obj;
    details.findById(username).exec(function(err,item3){
      obj = {
        text: req.body.comment,
        author: {
          image: null,
          username: item3.name,
          img: null
        }
      }
    
    
            comment.findById(com,function(err,item){
                
               comment.create(obj,function(err,item4){
    
                 
                item.comments.push(item4);
                item.save();
                
                
                })
    
              })
    
      })
    
          
         });
    
    })
    
}