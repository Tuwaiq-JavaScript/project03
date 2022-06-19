const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes/profile')
const routes1 = require('./routes/user')
const routes2 = require('./routes/todo')

mongoose.connect('mongodb://localhost:27017/meshal');
app.use(express.json());


app.use('/',routes);
app.use('/',routes1);
app.use('/',routes2);



app.listen(3000,()=>console.log('express started!'));