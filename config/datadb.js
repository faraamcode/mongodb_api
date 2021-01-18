const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
 username: String,
 googleid :String
})

const UserModel = mongoose.model("usermodel", userSchema);

module.exports = UserModel