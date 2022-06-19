const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({

    
         
        username: String,
        secret_key: String,
        password: String
      





},
{timestamps: true


});
module.exports = mongoose.model('Users', UsersSchema)