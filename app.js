const mongoose = require('mongoose');// mongoose
const express = require('express'); // express
const app = express();
//const routes = require('./routs/index')
mongoose.connect('mongodb://127.0.0.1:27017/proj03');
app.use(express.json());


const routesUser = require('./routes/user');
const routesToDo = require('./routes/todorouts');
const routesPro = require('./routes/profileroutes');


app.use('/',routesUser,routesToDo,routesPro);

 app.listen(3000,()=>console.log('express started!'));