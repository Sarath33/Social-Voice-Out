var User = require('./models/user');
var details = require('./models/details');
var LocalStrategy = require('passport-local').Strategy;
//var login = require('../routes/login');
//var signup = require('../routes/signup');
var flash = require('connect-flash');
var nodemailer = require('nodemailer');
const post_model = require('./models/post_model');
const { authenticate } = require('passport');
module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index.ejs',{ message: req.flash('signupMessage') });
	});

	app.get('/login', function(req, res){
		res.render('index.ejs');
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	app.post('/local_login:add',function(req,res){

		var email = req.body.user.email;
		var password = req.body.user.password;
		var scope= "global";
		console.log(req.body.user.email);

		
		details.findOne({email},function(err,item){
		  if(!item)
		  {
			 res.redirect("/login");
		  }
		  if(password == item.password)
		  {
			item.user
	  
		  post_model.find().sort({date: 'desc'}).exec(async(err,it)=>{
	   
		
		
         
		 
		res.render('post',{obj:it,user:item,admin:null});
		
			
	  
	  })
	  
		  }
		  else{
		   res.redirect("/login");
		  }
		})
	  });
	


	app.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	app.post('/signup',function(req,res){

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			secure: false,
			auth: {
			  user: 'sarathgopal33@gmail.com',
			  pass: 'bharathiboy'
			},
			tls: {
				rejectUnauthorized: false
			}
		  });
		  
		  var mailOptions = {
			from: 'sarathgopal33@gmail.com',
			to: req.body.email,
			subject: 'Checking',
			html: '<p>Click <a href="http://localhost:4000/profile">here</a> to get registered </p>'
		  };
		  
		  transporter.sendMail(mailOptions, function(error, info){
			if (error) {
			  console.log(error);
			} else {
			  console.log('Email sent: ' + info.response);
			}
		  });


	res.redirect('/login');
});

	app.get('/profile',async function(req, res){
		
		let array = await details.find({}).select('userid');
			
		var arr = [];
		for(var i=0;i<array.length;i++)
		{
			console.log(array[i].userid);
			arr.push(array[i].userid);
		}
		console.log(arr);
	res.render('registration.ejs', {  user: req.user, array: arr });
	});

	

	app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

	app.get('/auth/google/callback', 
	  passport.authenticate('google', { successRedirect: '/profile',
	                                      failureRedirect: '/' }));


	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})

	app.post('/registration', function(req,res){
		var body = req.body;
		var name = body.first_name + body.last_name;
		
		const obj ={
			first_name: body.first_name,
			last_name: body.last_name,
			email:body.email,
			userid:body.userid,
			password:body.password,
			district: body.district,
			taluk: body.taluk,
			contact: body.phone,
			photo: req.files.photo
		};

		
	

		details.create(obj,(err,item)=>{
			if(err)
			{
				console.log(err);
			}
			else
			{
                var scope = "global";
                
                post_model.find({scope},(err,it)=>{
				
				res.render("post",{ obj:it,user:item,admin:null});
                });
			}
		})
			})

			app.get('get_main',(req,res)=>{
				console.log(req.params);
				res.send("hi there");
			})


};




function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

    res.redirect('/login');
}