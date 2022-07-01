const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes1 = require('./routes/Users');
const routes2 = require('./routes/TodoTasks');
const routes3 = require('./routes/Profile');
mongoose.connect('mongodb://localhost:27017/mydata');
app.use(express.json());
app.use('/',routes1,routes2,routes3);



app.listen(3000,()=>console.log('express started!'));


