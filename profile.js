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


app.get("/view_profile/:id", async function(req, res)  {

    var query = querystring.parse(req.params.id);
    var username = req.params.id;
    //console.log(req.params.id);

    post_model.find({username}, function(err,item){
        details.findById(username, (err, it)=>{

        res.render("profile",{obj:item,user:it});

        });
    })

   

});


};