var LocalStrategy = require('passport-local').Strategy;

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const details = require('../models/details');
var User            = require('../models/google_user');
var configAuth = require('./auth');

module.exports = function(passport) {


	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});


	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({'local.username': email}, function(err, user){
				if(err)
					return done(err);
				if(user){
					return done(null, false, req.flash('signupMessage', 'That email already taken'));
				} else {
					var newUser = new User();
					newUser.local.username = email;
					newUser.local.password = newUser.generateHash(password);

					newUser.save(function(err){
						if(err)
							throw err;
						return done(null, newUser);
					})
				}
			})

		});
	}));

	passport.use('local-login', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, email, password, done){
			process.nextTick(function(){
				User.findOne({ 'local.username': email}, function(err, user){
					if(err)
						return done(err);
					if(!user)
						return done(null, false, req.flash('loginMessage', 'No User found'));
					if(!user.validPassword(password)){
						return done(null, false, req.flash('loginMessage', 'invalid password'));
					}
					return done(null, user);

				});
			});
		}
	));


	
	passport.use(new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL
	  },
	  function(accessToken, refreshToken, profile, done) {
	    	process.nextTick(function(){
			
	    		User.findOne({'google.id': profile.id}, function(err, user){
					
	    			if(err)
	    				return done(err);
	    			if(user){
						
						return done(null, user);
					}
	    			else {
						var newUser ;
						
	    				
	    				newUser = {
							email: profile.emails[0].value
						};
						var mail ={
							email: newUser.google.email
						};
	    				details.create(newUser,(err,item)=>{
	    					if(err){
								console.log(err);
								throw err;
							}
							console.log(item);
	    					return done(null, newUser);
						})
						
						
	    				console.log("profile written here");
	    			}
	    		});
	    	});
	    }

	));



	passport.use('local-login-2', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			
			details.findOne({ 'local.username': email}, function(err, user){
				if(err){
					console.log(err);
					return done(err);

				}
				if(!user){
					console.log("no email found");
					return done(null, false, req.flash('loginMessage', 'No User found'));
				}
				if(!user.validPassword(password)){
					console.log("no password found");
					return done(null, false, req.flash('loginMessage', 'invalid password'));
				}
				console.log(user);
				return done(null, user);

			});
		});
	}
));




	


};
