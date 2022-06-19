const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const app = express();
const Port =7000;

const routeP = require('./routes/indexProf');
const routeT = require('./routes/indextodo');
const routeU = require('./routes/indexUsers');
const jwt = require('jsonwebtoken');

app.use(express.json());

const Profile = require('./models/Profile');
const Todo = require('./models/Todo')
const Useres = require('./models/Users')

mongoose.connect('mongodb://localhost:27017/projectWithFend');


app.use('/',routeP)
app.use('/',routeT)
app.use('/',routeU)

app.listen(Port,()=>console.log('express started !'));