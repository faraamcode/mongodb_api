const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20")
passport.use(
 new GoogleStrategy({ 
 callbackURL : "/oauth/google/redirect",
 clientID : "753547988129-ssupmga7t4r5cmcknmoq5jcnum3j1d0o.apps.googleusercontent.com",
 clientSecret : "9isjQ6kELzVvAOGvYqYufIw6"
 }, (accessToken, refreshToken, profile, done)=>{
   console.log(profile);
 })
);