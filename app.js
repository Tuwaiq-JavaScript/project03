const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const router = require('express').Router()
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const { stringify } = require('querystring');
const ProfileRoutes = require('./routes/profileIndex')
const todoRoutes = require('./routes/todoTasksIndex')
const userRoutes = require('./routes/userIndex')
const Profile = require("./model/Profile")
const TodoTasks = require('./model/TodoTasks')
const User = require('./model/User')
const { boolean } = require('webidl-conversions');
const { Router } = require('express');
const { route } = require('express/lib/router');
const app = express()
mongoose.connect('mongodb://localhost:27017/TodoTasks');
app.use(express.json())
const jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/', ProfileRoutes)
app.use('/', todoRoutes )
app.use('/', userRoutes)

app.listen(3000,()=> console.log("server is running"))