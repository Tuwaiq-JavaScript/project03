const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const express = require('express');
const { Router } = require('express');
const app = express();
const PORT =3000;
mongoose.connect('mongodb://localhost:27017/ToDo5');
app.use(express.json());


app.use('/',Router);


app.listen(PORT,()=>console.log(`Express running on port: ${PORT}`));