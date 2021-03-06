var User = require('./models/user');
var details = require('./models/details');
var LocalStrategy = require('passport-local').Strategy;
const imgModel = require("./models/image");

const post_model = require("./models/post_model");
const admin = require("./models/admin");
const comment = require("./models/comments");
const user = require("./routes/user_route");

var flash = require('connect-flash');
var nodemailer = require('nodemailer');

const querystring = require("querystring");

module.exports = function(app){

    app.get("/admin_login",  function(req, res)  {
            res.render("Admin_login");
    })

    app.post("/admin_home", function(req,res){

        var email = req.body.user.id;
		var password = req.body.user.password;
      

        
       admin.findOne({special_id: email}).exec(function (err,item){ 
           
            if(!item)
            {
               res.redirect("/admin_login");
            }
            if(password == item.password)
            {
              
        
            post_model.find().exec(async(err,it)=>{

                
                res.render('admin_home',{obj : it});
                
            });
             }
             else{
                res.redirect("/admin_login");
             }
        
        }); 
    });
           
    app.get("/admin_desc",  function(req, res)  {

        post_model.findById(query.img).populate("comments").exec(function (err, campy) {
            

        });

    });

    app.post("/admin_post_allocator/:id", function(req,res){

        var query = querystring.parse(req.params.id);
       // console.log(query);
        if(query.status == 'completed')
        {
            res.redirect('/admin_post_complete/img='+query.img);
        }
        post_model.findByIdAndUpdate(query.img,{verify: query.status}, function(err,item){

            if(err)
            console.log(err);

          
        })

    })

    app.get('/admin_post_complete/:id', function(req,res){

        var query = querystring.parse(req.params.id);
        console.log(query);

        res.render('repost',{img:query.id});

    })
    
};