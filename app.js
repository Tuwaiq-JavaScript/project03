const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const express = require('express');
const router = require('./routes/index');
//const router1 = require('./routes/user');
//const router2 = require('./routes/profile');
//const router3 = require('./routes/todotasks');
const app = express();
const PORT = 3000;

const mySecret = 'secret'
mongoose.connect('mongodb://localhost:27017/lab');
app.use(express.json());
app.use('/',router);
//app.use('/user',router1);
//app.use('/profile',router2);
//app.use('/todotasks',router3);
app.get()
app.listen(PORT,()=>console.log(`Express running on port: ${PORT}`));