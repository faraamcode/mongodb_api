const mongoose = require("mongoose");
 mongoose.connect("mongodb://faraamcode:alagbede@cluster0-shard-00-00.jkwru.mongodb.net:27017,cluster0-shard-00-01.jkwru.mongodb.net:27017,cluster0-shard-00-02.jkwru.mongodb.net:27017/myshop?ssl=true&replicaSet=atlas-12ko7i-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true })
 .then(()=>{
   console.log("db connected");
  })
  .catch((error)=>{
   console.log("failed to connect" + error);
  })
 

module.exports = mongoose