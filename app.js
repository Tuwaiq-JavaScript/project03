//const router= require("express");
const { json } = require("express");
const router = require("./Routes/index");
const app = require("express")();

const mongoose = require("mongoose").connect(
  "mongodb://localhost:27017/project03"
);
app.use({json}.json());

const PORT = 3000;

app.use('/',router);


app.listen(PORT, () => console.log(`express listening on port ${PORT}`));
