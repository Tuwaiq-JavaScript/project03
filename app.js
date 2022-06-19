const express = require('express');
const app = express();
app.use(express.json());
const routes = require('./routes/index');
app.use('/',routes)
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/TodoMockApi');
app.listen(3000, () => console.log('Todo is started on port 3000'));