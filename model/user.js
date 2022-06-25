const mongoose = require('mongoose');
const UsersSchema = mongoose.Schema({
    username:String,
    secret_key:String,
    password:String,
});
module.exports = mongoose.model('User', UsersSchema);