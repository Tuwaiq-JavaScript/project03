const express = require('express')
const { default: mongoose } = require('mongoose')
const routes = require('./routes/')
const app = express()
mongoose.connect('mongodb://localhost:27017/project03');
const PORT = 3000

app.use(express.json())
app.use('/',routes)

app.listen(PORT,()=>console.log(`Express listening on port ${PORT}`))