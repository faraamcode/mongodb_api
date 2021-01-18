const passport = require("passport");
const User = require("./datadb")
const clientDetails = require("../document/sceret")
const GoogleStrategy = require("passport-google-oauth20")
passport.use(
 new GoogleStrategy({ 
 callbackURL : "/oauth/google/redirect",
 clientID : clientDetails.passport.clientid,
 clientSecret : clientDetails.passport.clientsecret
  }, (accessToken, refreshToken, profile, done)=>{
   User.findOne({googleid : profile.id}).then((currentUser)=>{
     if (currentUser) {
       console.log("user already ", currentUser);
     }else{

       new User({
        username : profile.displayName,
        googleid: profile.id
       }).save().then((newUser)=>{
        console.log("new user created" + newUser);
       })
     }
   })
 })
);
