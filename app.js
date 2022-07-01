const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes/index');
//const routes = require('./routes/user');
//const route2 = require('./routes/profile');
//const routes = require('./routes/todo');

mongoose.connect('mongodb://localhost:27017/todo');
app.use(express.json());

app.use('/',routes);//we can create many routes if we have diffrent paths 

app.listen(3000,()=>console.log('express started!'));