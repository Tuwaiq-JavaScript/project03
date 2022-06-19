const mongoose = require('mongoose');
//*******************course  schema and model for Users********************* 


const Users = mongoose.Schema({
    
        username: String,
        secret_key: String,
        password: String
                
})

module.exports = mongoose.model('Users',Users);

















