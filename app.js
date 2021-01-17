const express = require("express");
const app = express(); 
const passportSetup = require("./config/passport")
const oauthRouter = require("./route/authRoute");
app.set("view engine", "ejs")
app.use("/oauth", oauthRouter)
app.get("/", (req, res)=>{
res.render("index")
})
app.listen(3000, ()=>{
 console.log("connect to port 3000");
})